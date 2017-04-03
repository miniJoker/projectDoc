using projectD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectD.Controllers
{
    public class CardController : Controller
    {

        public PartialViewResult Seller(int? Id)
        {
            return PartialView(new Invoice());
        }

        public PartialViewResult Buyer(int? Id)
        {
            return PartialView(new Invoice());
        }
	}
}