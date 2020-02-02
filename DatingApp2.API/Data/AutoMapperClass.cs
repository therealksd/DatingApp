using System.Linq;
using AutoMapper;
using DatingApp2.API.Dtos;
using DatingApp2.API.Models;

namespace DatingApp2.API.Data
{
    public class AutoMapperClass:Profile
    {
        public AutoMapperClass()
        {
            CreateMap<User,UserForListDto>()
            .ForMember(dest=>dest.url,opt=>{
                opt.MapFrom(sourceMember=>sourceMember.Photos.FirstOrDefault(p=>p.IsMain).Url);
            });
            CreateMap<Photo,PhotosForListDto>();
        }
        
    }
}