using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projectD.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int AddressId { get; set; }
        public virtual Address Address { get; set; }
    }
}