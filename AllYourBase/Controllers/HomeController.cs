using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AllYourBase.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Flexbox()
        {
            ViewBag.Message = "Flexbox demo page";

            return View();
        }

        public ActionResult Examples()
        {
            ViewBag.Message = "Sass usage examples";

            return View();
        }

        public ActionResult Sandbox()
        {
            ViewBag.Message = "Sandbox";

            return View();
        }
    }
}