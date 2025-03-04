using IN_Clone.Server.Models;
using IN_Clone.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace IN_Clone.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller

    {
        public readonly UserServices _userService;

        private readonly Auth _authServices;

        public AuthController(UserServices userService, Auth authServices)
        {
            _userService = userService;
            _authServices = authServices;
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(User newuser)
        {
            var existingUser = await _userService.GetUserbyUserName(newuser.UserName);
            try
            {
                if (existingUser == null)
                {
                    var result = await _userService.CreateUserAsync(newuser);
                    return Ok(result);
                }
                return BadRequest("User with this Email already Exists");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(Login loginuser)
        {
            var existingUser = await _userService.GetUserbyUserName(loginuser.UserName);
            if (existingUser != null && existingUser.Password == loginuser.Password)
            {
                var token = _authServices.genrateJWTToken(existingUser.UserName, existingUser.Password);
                return Ok(new {Token = token, UserId = existingUser.UserId});
            }
            return BadRequest("Invalid User");
        }
    }
}
