using System;
using TurimAPI.Models;

namespace TurimAPI.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(DBContext context)
        {
            context.Clients.AddOrUpdate(x => x.Id,
                new Client {Id = 1, Name = "Ronni", Age = 37, RegisterDate = new DateTime(2018, 08, 25)},
                new Client {Id = 1, Name = "Neil Peart", Age = 65, RegisterDate = new DateTime(2018, 08, 25)}
                );

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
