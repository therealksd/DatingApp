using Microsoft.AspNetCore.Mvc;
using DatingApp2.API.Data;
using System.Threading.Tasks;
using DatingApp2.API.Dtos;
using DatingApp2.API.Models;
using System.Security.Claims;

namespace DatingApp2.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepositry _repo;
        public AuthController(IAuthRepositry repo)
        {
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto userforRegisterDto)
        {
            userforRegisterDto.Username=userforRegisterDto.Username.ToLower();
            if(await _repo.UserExists(userforRegisterDto.Username)) return BadRequest("UserName already Exists");
            var userToCreate=new User
            {
                UserName=userforRegisterDto.Username,
                Password=userforRegisterDto.Password
            };
           await _repo.Register(userToCreate);
           return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserRegisterDto userforLogin)
        {
            var userFromRepo =await _repo.Login(userforLogin.Username,userforLogin.Password);
            if(userFromRepo==null) return Unauthorized();
            return Ok(userFromRepo);
        }

    }
}