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
	}
}