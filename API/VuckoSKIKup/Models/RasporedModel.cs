using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class RasporedModel
    {
        [Key]
        public int ID { get; set; }
        public string ImeTakmičara { get; set; }
        public string PrezimeTakmičara { get; set; }
        public int RedniBroj { get; set; }
        public string NacionalnostTakmičara { get; set; }
        public string Disciplina { get; set; }
        public string Staza { get; set; }
        public string Kategorija { get; set; }
    }
}
