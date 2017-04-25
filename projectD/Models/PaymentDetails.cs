using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projectD.Models
{
    public class PaymentDetails
    {
        public int Id { get; set; }
        public string INN { get; set; }
        public string KPP { get; set; }
        public string Account { get; set; }
        public string KorAccount { get; set; }
        public string BIK { get; set; }
        public string BankName { get; set; }
    }
}