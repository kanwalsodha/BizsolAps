using BO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DL
{
    public class DevelopersDL
    {
        private  BIZSOLDbContext _context;
        public DevelopersDL(BIZSOLDbContext context)
        {
            _context = context;
        } 
        public IEnumerable<Developer> GetAllDeveloper()
        {
            return _context.Developers.ToList();
        }

        public void InsertDeveloper(List<Developer> devObj)
        {
             _context.Developers.AddRangeAsync(devObj);
            _context.SaveChanges();

        }
    }
}
