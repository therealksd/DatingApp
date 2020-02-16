using System.ComponentModel.DataAnnotations;
using System;

namespace DatingApp2.API.Dtos
{
    public class UserRegisterDto
    {
        [Required(ErrorMessage="UserName required to proceed further")]
        public string Username { get; set; }
        [Required]
        [StringLength(7,MinimumLength=4,ErrorMessage="Password must be btw 4 and 7 Character")]
        
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public int Age { get; set; }
        public DateTime Created {get; set;}
        public DateTime LastActive{get;set;}

        public UserRegisterDto()
        {
           Created=DateTime.Now;
           LastActive=DateTime.Now;
           Age=DateTime.Now.Year-DateOfBirth.Year;
        }
        
    }
} 