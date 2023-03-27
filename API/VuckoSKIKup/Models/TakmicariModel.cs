using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class TakmicariModel
    {
        [Key]
        public int ID { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Nacionalnost { get; set; }
        public string Disciplina { get; set; }
        public int Godiste { get; set; }
        public int RedniBroj { get; set; }  
    }
}
