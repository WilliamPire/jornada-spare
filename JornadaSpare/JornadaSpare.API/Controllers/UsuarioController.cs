using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JornadaSpare.API.Domain;
using JornadaSpare.API.Domain.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JornadaSpare.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuario _repositorioUsuario;

        public UsuarioController(IUsuario repositorio)
            => _repositorioUsuario = repositorio;

        // GET: api/Usuario
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Usuario/will@gmail.com
        [HttpGet("{email}", Name = "Get")]
        public IActionResult Get(string email)
            => Ok(_repositorioUsuario.ObterUsuario("williampire@gmail.com"));

        // POST: api/Usuario
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _repositorioUsuario.Inserir(new Usuario("ellenlima", "Ellen Lima", "ellenlima@flourish.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5puW-MfDoImZvyg4kvyYgePQFRGHLi-CkR5iGkN85vRX7ERKL&usqp=CAU"));
            _repositorioUsuario.Inserir(new Usuario("luddycoutinho", "Luddy Coutinho", "luddycoutinho@flourish.com", "https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg"));
            _repositorioUsuario.Inserir(new Usuario("oliviaboretti", "Olivia Boretti", "oliviaboretti@flourish.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYxhobS1TYRciPT9qSTo_YFTPzsBlbO3wyqqO5IZa60qbm3TsT&usqp=CAU"));
        }

        [HttpPost("login")]
        public IActionResult Login(Request request)
        {
            if (_repositorioUsuario.ObterUsuario(request.username) == null)
                return BadRequest();
            return Ok(_repositorioUsuario.ObterUsuario(request.username));
        }

        // PUT: api/Usuario/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class Request
    {
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
    }
}
