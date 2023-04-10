using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class DisciplineModel
    {
        [Key]
        public int ID { get; set; }
        public string Ime { get; set; }
        public string Staza { get; set; }
        public string Kategorija { get; set; }
    }
}
