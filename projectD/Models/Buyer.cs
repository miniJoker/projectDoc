using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace projectD.Models
{
    public class Buyer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [UIHint("Inn")]
        public string Inn { get; set; }
        public Address Address { get; set; }
    }
}