using System.Threading.Tasks;
using DatingApp2.API.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DatingApp2.API.Data
{
    public class AuthRepositry : IAuthRepositry
    {
        private readonly DataContext _context;
        public AuthRepositry(DataContext context)
        {
            _context = context;

        }
        public async Task<User> Login(string Username, string Password)
        {
           var user=await _context.Users.FirstOrDefaultAsync(x=>x.UserName==Username && x.Password==Password);
           if(user==null) return null;
           return user; 
        }

        public async Task<User> Register(User user)
        {
           await  _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> UserExists(string Username)
        {
           if(await _context.Users.AnyAsync(x=>x.UserName==Username)) return true;
           return false;
        }
    }
}