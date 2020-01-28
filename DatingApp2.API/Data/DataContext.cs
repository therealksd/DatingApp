using Microsoft.EntityFrameworkCore;
using DatingApp2.API.Models;
namespace DatingApp2.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {  
        }
        public DbSet<Value> Values { get; set; }
    }
}