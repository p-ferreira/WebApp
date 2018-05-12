namespace API.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ErrorLogs
    {
        [Key]
        public int LogId { get; set; }

        [Required]
        [StringLength(1000)]
        public string Error { get; set; }

        public DateTime? Date { get; set; }
    }
}
