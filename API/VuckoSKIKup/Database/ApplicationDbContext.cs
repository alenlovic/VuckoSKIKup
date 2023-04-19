using Microsoft.EntityFrameworkCore;
using VuckoSKIKup.Models;

namespace VuckoSKIKup.Database
{
    public class ApplicationDbContext :  DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<TakmicariModel> Takmicari { get; set; }
        public DbSet<RasporedModel> Raspored { get; set; }
    }
}
