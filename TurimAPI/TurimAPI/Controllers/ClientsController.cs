using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using TurimAPI.Models;

namespace TurimAPI.Controllers
{
    public class ClientsController : ApiController
    {
        private DBContext db = new DBContext();

        public IQueryable<Client> GetClients()
        {
            return db.Clients;
        }

        [ResponseType(typeof(Client))]
        public IHttpActionResult GetClient(int id)
        {
            var client = db.Clients.Find(id);
        
            if (client == null)
                return NotFound();

            return Ok(client);
        }

        [ResponseType(typeof(void))]
        public IHttpActionResult PutClient(int id, Client client)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (id != client.Id)
                return BadRequest();

            db.Entry(client).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                    return NotFound();
                else
                    throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(Client))]
        public IHttpActionResult PostClient(Client client)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            db.Clients.Add(client);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = client.Id }, client);
        }

        [ResponseType(typeof(Client))]
        public IHttpActionResult DeleteClient(int id)
        {
            var client = db.Clients.Find(id);
            if (client == null)
                return NotFound();

            db.Clients.Remove(client);
            db.SaveChanges();

            return Ok(client);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
                db.Dispose();
            
            base.Dispose(disposing);
        }

        private bool ClientExists(int id)
        {
            return db.Clients.Count(e => e.Id == id) > 0;
        }
    }
}