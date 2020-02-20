using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using System;
using DatingApp2.API.Data;
using DatingApp2.API.Dtos;
using DatingApp2.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp2.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepositry _repo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepositry repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var userToReturn=_mapper.Map<IEnumerable<UserForListDto>>(users);
            foreach(UserForListDto u in userToReturn)
            {
                //u.Age=
            }
            return Ok(userToReturn);
        }

        [HttpGet("{id}",Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForListDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateUser(UserForListDto user)
        {
           var userFromDB=await _repo.UpdateUser(user);
           var userToReturn=_mapper.Map<UserForListDto>(userFromDB);
           //return Ok(userToReturn);
           return NoContent();
        }

        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> GetLike(int id,int recipientId)
        {
            if(await _repo.GetUser(id)==null){return Unauthorized();}
             if(await _repo.GetUser(recipientId)==null){return NotFound();}
            var like=await _repo.GetLike(id,recipientId);

            if(like!=null){return BadRequest("You Already liked this user");}

            like=new Like
            {
                LikeeId=recipientId,
                LikerId=id
            };
            _repo.Add<Like>(like);

            if(await _repo.SaveAll()) return Ok();

            return BadRequest("Failed to like User");

        }

        [HttpGet("getLikeUsers/{likerId}")]
        public async Task<IActionResult> GetLikeUsers(int likerId)
        {
           var users=await _repo.GetLikeUsers(likerId);
           var userToReturn=_mapper.Map<IEnumerable<UserForListDto>>(users);
           if(userToReturn!=null) return Ok(userToReturn);
            return NoContent();
        }
        
        [HttpGet("getUsersWhoLike/{likerId}")]
        public async Task<IActionResult> getUsersWhoLike(int likerId)
        {
           var users=await _repo.GetUsersWhoLike(likerId);
           var userToReturn=_mapper.Map<IEnumerable<UserForListDto>>(users);
           if(userToReturn!=null) return Ok(userToReturn);
            return NoContent();
        }

    }
}