using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Page<T>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int NumberOfPages { get; set; }
        public int TotalNumberOfRecords { get; set; }
        public List<T> PageItems { get; set; }

    }
}