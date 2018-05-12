using System;

namespace API.Models
{
    public class WorkItems
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string WorkItemType { get; set; }
        public string IterationPath { get; set; }
        public string AreaPath { get; set; }
        public string State { get; set; }
        public Guid uId { get; set; }        
    }
}