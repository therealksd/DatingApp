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
         Task<User> UpdateUser(UserForListDto user);
         Task<Like> GetLike(int userId,int RecipientUId);
         Task<IEnumerable<User>> GetLikeUsers(int id);
         Task<IEnumerable<User>> GetUsersWhoLike(int id);
    }
}