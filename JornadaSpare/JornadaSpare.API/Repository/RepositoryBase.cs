using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace JornadaSpare.API.Repository
{
    public abstract class RepositoryBase<TCollection>
    {
        protected IMongoDatabase Database { get; }
        protected IMongoCollection<TCollection> Collection { get; }

        
        public RepositoryBase(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("JornadaSpareDB");
            var client = new MongoClient(connectionString);

            this.Database = client.GetDatabase("sensormdb");
            this.Collection = this.Database.GetCollection<TCollection>(typeof(TCollection).Name);
        }
    }
}
