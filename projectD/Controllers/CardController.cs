using projectD.DataAccess;
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
            TempDataProvider dataProvider = new TempDataProvider();
            var temp = dataProvider.GenerateOrgs();
            ViewBag.OrgList = temp.Select(x => new KeyValuePair<int,string>(x.Id,x.Name)).ToList();
            if (Id > 0)
            {
                invoice.Organization = temp.Where(x => x.Id == Id).Single();
            }
            return PartialView(invoice);
        }

        public PartialViewResult Buyer(int? Id)
        {
            Buyer buyer = new Buyer();
            TempDataProvider dataProvider = new TempDataProvider();
            var temp = dataProvider.GenerateBuyers();
            ViewBag.BuyerList = temp.Select(x => new KeyValuePair<int, string>(x.Id, x.Name)).ToList();
            if (Id > 0)
            {
                buyer = temp.Where(x => x.Id == Id).Single();
            }
            return PartialView(buyer);
        }

        public PartialViewResult Item(int? Id)
        {
            Item item = new Item();
            TempDataProvider dataProvider = new TempDataProvider();
            var temp = dataProvider.GenerateItems();
            ViewBag.ItemList = temp.Select(x => new KeyValuePair<int, string>(x.Id, x.Name)).ToList();
            if (Id > 0)
            {
                item = temp.Where(x => x.Id == Id).Single();
            }
            return PartialView("~/Views/Card/NewItem.cshtml",item);
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