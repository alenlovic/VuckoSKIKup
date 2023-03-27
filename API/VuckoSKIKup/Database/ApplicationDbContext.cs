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
        public DbSet<DisciplineModel> Discipline { get; set; }
        public DbSet<StazeModel> Staze { get; set; }
    }
}
