using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DatingApp2.API.Data;
using Microsoft.EntityFrameworkCore;

namespace DatingApp2.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Values : ControllerBase
    {
        private readonly DataContext _context;
        public Values(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values=await _context.Values.ToListAsync();
            return Ok(values);
        }
    }

}
