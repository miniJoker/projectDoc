using projectD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace projectD.Controllers
{
    public class PageController : Controller
    {

        public ActionResult Index()
        {
            ViewBag.Title = "Главная";
            return View();
        }

        public ActionResult New()
        {
            ViewBag.Title = "Новый документ";
            Invoice invoice = new Invoice();
            var list = GenerateOrgs();
            return View(invoice);
        }

        public ActionResult List()
        {
            ViewBag.Title = "Список документов";
            return View();
        }

        public ActionResult Archive()
        {
            ViewBag.Title = "Архив";
            return View();
        }

        public ActionResult Account()
        {
            ViewBag.Title = "Личный кабинет";
            return View();
        }

        private List<Organization> GenerateOrgs(){
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
            Organization org2 = new Organization()
            {
                Name = "Debooster",
                Address = new Address()
                {
                    Area = "UnDefaultArea",
                    City = "UnDefaultCity",
                    Detail = "UnDefaultDetail"
                },
                PaymentDetails = new PaymentDetails()
                {
                    Account = "123123",
                    BankName = "UnDefaultBank",
                    BIK = "123123",
                    INN = "123123",
                    KorAccount = "123123",
                    KPP = "123123"
                }
            };
            return new List<Organization>() { org1, org2 };
        }
	}
}