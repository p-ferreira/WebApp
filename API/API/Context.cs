namespace API
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using API.Models;

    public partial class GenericDataBase : DbContext
    {
        public GenericDataBase()
            : base("name=Context")
        {
        }

        public virtual DbSet<ErrorLogs> ErrorLogs { get; set; }
        public virtual DbSet<WorkItems> WorkItems { get; set; }
        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ErrorLogs>()
                .Property(e => e.Error)
                .IsUnicode(false);

        }
    }
}
