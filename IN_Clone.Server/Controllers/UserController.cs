using IN_Clone.Server.Models;
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

        [HttpPost("FollowUser/{followerId}&{followingId}")]
        public async Task<IActionResult> FollowUser(string followerId, string followingId)
        {
            var result = await _userService.FollowOrUnFollowUser(followerId, followingId);
            return Ok(result);
        }

        [HttpGet("SearchBar")]
        public async Task<List<User>> GetUserbySearch([FromQuery] string search) =>
            await _userService.GetUserbySearch(search);
        
    }
}
