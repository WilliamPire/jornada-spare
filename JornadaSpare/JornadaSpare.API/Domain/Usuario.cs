using System;

namespace JornadaSpare.API.Domain
{
    public class Usuario
    {
        //IMPLEMENTAR FUTURAMENTE UM JWT
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string[] Roles { get; set; }

        public Usuario(string username, string name, string email, string image)
        {
            this.Id = Guid.NewGuid();
            this.UserName = username;
            this.Name = name;
            this.Email = email;
            this.Image = !string.IsNullOrWhiteSpace(image) ? image : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/user-male-icon.png";
            this.Token = "aHR0cHM6Ly9iYWx0YWRlbW9zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9lc2hvcC9iYXRtYW4ucG5n";
            this.Roles = new string[] { "employee", "manager" };
        }
    }
}
