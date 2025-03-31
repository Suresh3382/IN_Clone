using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace IN_Clone.Server.Models
{
    public class User : Login
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? UserId { get; set; }

        [BsonElement("fullName")]
        public string FullName { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("follower")]
        public List<string>? Follower { get; set; }

        [BsonElement("following")]
        public List<string>? Following { get; set; }
    }

    public class Login
    {
        [BsonElement("userName")]
        public string UserName { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }
    }
}
