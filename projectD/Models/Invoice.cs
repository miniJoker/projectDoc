using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectD.Models
{
    public class Invoice
    {
        public Invoice() {
            Date = DateTime.Today;
        }

        public int Id { get; set; }
        public int OrganizationId { get; set; }
        public Organization Organization { get; set; }
        public Buyer Buyer { get; set; }
        [UIHint("Number")]
        public int? Number { get; set; }
        public DateTime Date { get; set; }
        public List<Item> Items { get; set; }
    }
}