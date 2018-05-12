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
        //https://docs.microsoft.com/pt-br/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api
        Product[] products = new Product[]
       {
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
       };

        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

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
