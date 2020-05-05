using System.Threading.Tasks;

namespace JornadaSpare.API.Domain.Repository
{
    public interface IUsuario
    {
        void Inserir(Usuario usuario);
        Usuario ObterUsuario(string username);
    }
}