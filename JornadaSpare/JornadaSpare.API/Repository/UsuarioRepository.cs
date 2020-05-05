using JornadaSpare.API.Domain;
using JornadaSpare.API.Domain.Repository;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace JornadaSpare.API.Repository
{
    public class UsuarioRepository : RepositoryBase<Usuario>, IUsuario
    {
        public UsuarioRepository(IConfiguration configuration)
          : base(configuration) { }

        public void Inserir(Usuario usuario)
        {
            try
            {
                 Collection.InsertOne(usuario);
            }
            catch (System.Exception ex)
            {

                throw;
            }
        
        }
        

        public Usuario ObterUsuario(string username) 
            => Collection.Find(x => x.UserName == username).SingleOrDefault();
    }
}
