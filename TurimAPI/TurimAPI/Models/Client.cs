using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TurimAPI.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public DateTime RegisterDate { get; set; }
    }
}