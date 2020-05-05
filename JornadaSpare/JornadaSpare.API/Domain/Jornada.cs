using System;

namespace JornadaSpare.API.Domain
{
    public class Jornada
    {
        public Guid Id { get; set; }
        public Guid UsuarioId { get; set; }
        public String Pergunta { get; set; }
        public String Resposta { get; set; }
        public String PaginaNome { get; set; }
        public String DataResposta { get; set; }        
        public String Desafio { get; set; }
        public String Pontuacao { get; set; }
        public String DataConslusao { get; set; }
    }
}