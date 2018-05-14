using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class WorkItemsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetPage(int pageNumber)
        {
            GenericDataBase genericDbCtx = new GenericDataBase();

            Page<WorkItems> page = new Page<WorkItems>();

            page.PageSize = 10;
            page.PageNumber = pageNumber;
            page.TotalNumberOfRecords = genericDbCtx.WorkItems.Count();        
            page.NumberOfPages = (int)Math.Ceiling(page.TotalNumberOfRecords / (double)page.PageSize);
            
            page.PageItems = genericDbCtx.WorkItems.OrderBy(wi => wi.uId)
                                                   .Skip((pageNumber - 1) * page.PageSize)
                                                   .Take(page.PageSize)
                                                   .ToList();
            
            return Ok(page);
        }
    }
}
