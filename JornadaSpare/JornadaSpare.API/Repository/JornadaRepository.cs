using JornadaSpare.API.Domain;
using JornadaSpare.API.Domain.Repository;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JornadaSpare.API.Repository
{
    public class JornadaRepository : RepositoryBase<Jornada>, IJornada
    {
        public JornadaRepository(IConfiguration configuration)
          : base(configuration) { }

        public async Task Inserir(Jornada jornada) 
            => await Collection.InsertOneAsync(jornada);

        public async Task<IList<Jornada>> ObterJornadasPorusUsuarioId(Guid usuarioId) 
            => await Collection.Find(x => x.UsuarioId == usuarioId).ToListAsync();
    }
}
