using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class TakmicariModel
    {
        [Key]
        public int ID { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public int Godiste { get; set; }
        public string ZemljaPorijekla { get; set; }
        public string BrojTelefona { get; set; }
        public string Email { get; set; }
    }
}
