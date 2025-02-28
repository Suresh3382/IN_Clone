using IN_Clone.Server.Models;
using IN_Clone.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace IN_Clone.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public UserServices _userService;

        public UserController(UserServices userService)
        {
            _userService = userService;
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(User newuser)
        {
            var existingUser = await _userService.GetUserbyEmail(newuser.Email);
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
            var existingUser = await _userService.GetUserbyEmail(loginuser.Email);
            if (existingUser != null && existingUser.Password == loginuser.Password)
            {
                return Ok(existingUser);
            }
            return BadRequest("Invalid User");
        }
    }
}
