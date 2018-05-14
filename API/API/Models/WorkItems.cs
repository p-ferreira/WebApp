using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class WorkItems
    {
        [Key]
        public long uId { get; set; }
        public int? ID { get; set; }        
        public string Title { get; set; }        
        public string WorkItemType { get; set; }        
        public string IterationPath { get; set; }        
        public string AreaPath { get; set; }        
        public string State { get; set; }
        public Guid? Guid { get; set; }
    }
}