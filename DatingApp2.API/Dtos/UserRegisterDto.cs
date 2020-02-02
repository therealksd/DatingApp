using System.ComponentModel.DataAnnotations;

namespace DatingApp2.API.Dtos
{
    public class UserRegisterDto
    {
        [Required(ErrorMessage="UserName required to proceed further")]
        public string Username { get; set; }
        [StringLength(7,MinimumLength=4,ErrorMessage="Password must be btw 4 and 7 Character")]
        public string Password { get; set; }
    }
} 