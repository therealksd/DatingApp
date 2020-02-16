using Microsoft.AspNetCore.Mvc;
using DatingApp2.API.Data;
using System.Threading.Tasks;
using DatingApp2.API.Dtos;
using AutoMapper;
using DatingApp2.API.Models;
using System.Security.Claims;

namespace DatingApp2.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepositry _repo;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepositry repo,IMapper mapper)
        {
            _repo = repo;_mapper=mapper;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto userforRegisterDto)
        {
            userforRegisterDto.Username=userforRegisterDto.Username.ToLower();
            if(await _repo.UserExists(userforRegisterDto.Username)) return BadRequest("UserName already Exists");
            var userToCreate=_mapper.Map<User>(userforRegisterDto);
           await _repo.Register(userToCreate);
           var userToReturn=_mapper.Map<UserForListDto>(userToCreate); 
           //need to read about it
           return CreatedAtAction("GetUser",new{controller="Users", id=userToCreate.Id},userToReturn);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO userforLogin)
        {
            var userFromRepo =await _repo.Login(userforLogin.Username,userforLogin.Password);
            if(userFromRepo==null) return Unauthorized();
            return Ok(userFromRepo);
        }

    }
}