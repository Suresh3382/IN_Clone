﻿using IN_Clone.Server.Models;
using IN_Clone.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IN_Clone.Server.Controllers
{

    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public UserServices _userService;

        public UserController(UserServices userService)
        {
            _userService = userService;
        }

        [HttpGet("GetUserbyId")]
        public async Task<User> GetUserbyId(String userId) =>
            await _userService.GetUserbyId(userId);
            

        [HttpGet("GetAllUser")]
        public async Task<List<User>> GetAllUser() =>
            await _userService.GetAllUser();
    }
}
