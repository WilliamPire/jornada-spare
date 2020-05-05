using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JornadaSpare.API.Domain.Repository
{
    public interface IJornada
    {
        Task Inserir(Jornada jornada);
        Task<IList<Jornada>> ObterJornadasPorusUsuarioId(Guid usuarioId);
    }
}
