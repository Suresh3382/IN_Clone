using IN_Clone.Server.Models;
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
        public async Task<User> GetUserbyId(string Id)
        {
            var user = await userModel.Find(x => x.UserId == Id).FirstOrDefaultAsync();
            return user;
        }

        public async Task<User> CreateUserAsync(User user)
        {
            await userModel.InsertOneAsync(user);
            return user;
        }

        public async Task<User> GetUserbyEmail(string email)
        {
            var user = await userModel.Find(x => x.Email == email).FirstOrDefaultAsync();
            return user;
        }
    }
}
