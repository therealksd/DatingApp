using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp2.API.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DatingApp2.API.Dtos;

namespace DatingApp2.API.Data
{
    public class DatingRepositry : IDatingRepositry
    {
        private readonly DataContext _context;
        public DatingRepositry(DataContext context)
        {
            _context = context;

        }
        
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
           _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user=await _context.Users.Include(p=>p.Photos).FirstOrDefaultAsync(u=>u.Id==id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users=await _context.Users.Include(p=>p.Photos).ToListAsync();
            return users;
        }
        public async Task<User> UpdateUser(UserForListDto usr)
        {
            var user=await _context.Users.SingleOrDefaultAsync(x=>x.Id==usr.Id);
            user.Interests=usr.Interests;
            user.Introduction=usr.Introduction;
            user.LookingFor=usr.LookingFor;
            user.City=usr.City;
            user.Country=usr.Country;
            _context.SaveChanges();
            return user;

        }
        public async Task<Like> GetLike(int userId,int RecipientUId)
        {
            return await _context.Likes.FirstOrDefaultAsync(l=>l.LikeeId==RecipientUId && l.LikerId==userId);
        }
        public async Task<IEnumerable<User>> GetLikeUsers(int id)
        {
            var likes=await _context.Likes.Where(l=>l.LikerId==id).ToListAsync();
            User user;
            List<User> userToReturn=new List<User>();
            foreach(var i in likes)
            {
               user=await _context.Users.Include(p=>p.Photos).SingleAsync(u=>u.Id==i.LikeeId);
               userToReturn.Add(user);
            }
            return userToReturn;
                            
        }
        public async Task<IEnumerable<User>> GetUsersWhoLike(int id)
        {
            var likes=await _context.Likes.Where(l=>l.LikeeId==id).ToListAsync();
            User user;
            List<User> userToReturn=new List<User>();
            foreach(var i in likes)
            {
               user=await _context.Users.Include(p=>p.Photos).SingleAsync(u=>u.Id==i.LikerId);
               userToReturn.Add(user);
            }
            return userToReturn;
                            
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() >0;
        }
    }
}