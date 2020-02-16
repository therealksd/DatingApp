using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp2.API.Models;
using DatingApp2.API.Dtos;

namespace DatingApp2.API.Data
{
    public interface IDatingRepositry
    {
         void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         
    }
}

/*
public void signUp(UserRegisterDto user)
        {
            User newUser=AutoMapper.Mapper.Map<User>(user);
            _context.Users.Add(newUser);
            _context.SaveChanges();


        }
*/