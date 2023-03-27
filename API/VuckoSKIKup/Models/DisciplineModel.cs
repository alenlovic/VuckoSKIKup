using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class DisciplineModel
    {
        [Key]
        public int ID { get; set; }
        public string Disciplina { get; set; }
    }
}
