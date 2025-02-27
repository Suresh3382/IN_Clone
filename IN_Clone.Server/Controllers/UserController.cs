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

        public UserController(UserServices userService) {
            _userService = userService;
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn(User newuser)
        {
            try
            {
                var result = await _userService.CreateUserAsync(newuser);
                return Ok(result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(Login loginuser)
        {
            var existingUser = await _userService.GetUserbyEmail(loginuser.Email);
            if(existingUser != null && existingUser.Password == loginuser.Password)
            {
                return Ok(existingUser);
            }
            return BadRequest("Invalid User");
        }
   
    }
}
