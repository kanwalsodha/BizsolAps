using BL;
using BO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json;


namespace UI.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DevelopersBL _developersBLObj;

        public HomeController(ILogger<HomeController> logger, BIZSOLDbContext context)
        {
            _logger = logger;
            _developersBLObj = new DevelopersBL(context);
        }

        public IActionResult Index()
        {
            var devList = _developersBLObj.GetAllDeveloper();
            return View(devList);
        }
        [HttpPost]
        public ActionResult InsertDevelopers(string jsonData)
        { 
            var devobj= System.Text.Json.JsonSerializer.Deserialize<List<Developer>>(jsonData);
            _developersBLObj.InsertDeveloper(devobj);
            return Json(jsonData);   

        }
    }
}
