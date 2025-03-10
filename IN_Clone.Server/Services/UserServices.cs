﻿using System.Text.RegularExpressions;
using IN_Clone.Server.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace IN_Clone.Server.Services
{
    public class UserServices
    {
        public readonly IMongoCollection<User> userModel;

        public UserServices(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("Insta");
            userModel = database.GetCollection<User>("InstaCollection");
        }
        public async Task<User> GetUserbyId(string userId)
        {
            var user = await userModel.Find(x => x.UserId == userId).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            await userModel.InsertOneAsync(user);
            return user;
        }

        public async Task<User> GetUserbyUserName(string username)
        {
            var user = await userModel.Find(x => x.UserName == username).FirstOrDefaultAsync();
            return user;
        }

        public async Task<List<User>> GetAllUser()
        {
            var allUser = await userModel.Find(_ => true).ToListAsync();
            return allUser;
        }

        public async Task<List<User>> FollowOrUnFollowUser(string followerId, string followingId)
        {
            var follower = await userModel.Find(u => u.UserId == followerId).FirstOrDefaultAsync();
            var following = await userModel.Find(u => u.UserId == followingId).FirstOrDefaultAsync();

            if (follower != null && following != null)
            {
                if (!follower.Following.Contains(followingId))
                {
                    follower.Following.Add(followingId);
                    following.Follower.Add(followerId);
                }
                else
                {
                    follower.Following.Remove(followingId);
                    following.Follower.Remove(followerId);
                }

                await userModel.ReplaceOneAsync(u => u.UserId == followerId, follower);
                await userModel.ReplaceOneAsync(u => u.UserId == followingId, following);
            }

            return new List<User> { follower, following };
        }

        public async Task<List<User>> GetUserbySearch(string? search = null)
        {
            if (!string.IsNullOrEmpty(search))
            {
                var regex = new BsonRegularExpression(search, "i");
                var filter = Builders<User>.Filter.Regex("UserName", regex);
                return await userModel.Find(filter).ToListAsync();
            }
            else
            {
                var allUser = await userModel.Find(_ => true).ToListAsync();
                return allUser; 
            }
        }
    }
}
