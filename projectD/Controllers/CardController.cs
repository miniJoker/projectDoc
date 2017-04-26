using projectD.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectD.Controllers
{
    public class CardController : Controller
    {

        public PartialViewResult Seller(int? Id)
        {

            Invoice invoice = new Invoice();
            if (Id.HasValue)
            {
                Organization org1 = new Organization()
                {
                    Name = "Booster",
                    Address = new Address()
                    {
                        Area = "DefaultArea",
                        City = "DefaultCity",
                        Detail = "DefaultDetail"
                    },
                    PaymentDetails = new PaymentDetails()
                    {
                        Account = "123",
                        BankName = "DefaultBank",
                        BIK = "123",
                        INN = "123",
                        KorAccount = "123",
                        KPP = "123"
                    }
                };
                invoice.Organization = org1;
            }
            return PartialView(invoice);
        }

        public PartialViewResult Buyer(int? Id)
        {
            return PartialView(new Invoice());
        }

        public PartialViewResult AddItem(string name, string type, string count, string price)
        {
            NumberFormatInfo formatProvider=new NumberFormatInfo();
            formatProvider.NumberDecimalSeparator=".";
            formatProvider.NumberDecimalDigits=2;
            Item item =new Item(){
                Name=name,
                Type=type,
                Count = Double.Parse(count, formatProvider),
                Price = Double.Parse(price, formatProvider)
            };
            return PartialView("~/Views/Card/Item.cshtml", item);
        }
	}
}