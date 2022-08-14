
using Microsoft.EntityFrameworkCore;

namespace BO
{
    public class BIZSOLDbContext :DbContext
    { 
        public BIZSOLDbContext(DbContextOptions options) : base(options)
        { }
        public DbSet<Developer> Developers { get; set; }
    }
}
