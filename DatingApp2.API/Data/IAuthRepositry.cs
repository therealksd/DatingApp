using System.Threading.Tasks;
using DatingApp2.API.Models;
namespace DatingApp2.API.Data
{
    public interface IAuthRepositry
    {
        Task<User> Register(User user);
        Task<User> Login(string Username,string Password);

        Task<bool> UserExists(string Username);

         
    }
}