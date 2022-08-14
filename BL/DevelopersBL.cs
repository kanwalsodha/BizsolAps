using BO;
using System.Collections.Generic;
using DL;
namespace BL
{
    public class DevelopersBL
    {
        private readonly DevelopersDL  _developerDB;
        public DevelopersBL(BIZSOLDbContext context)
        {
            _developerDB = new DevelopersDL(context);
        }
        public IEnumerable<Developer> GetAllDeveloper()
        {
            return _developerDB.GetAllDeveloper();
        }
        public void InsertDeveloper(List<Developer> devObj)
        {
            _developerDB.InsertDeveloper(devObj);

        }
    }
}
