using System.ComponentModel.DataAnnotations;

namespace VuckoSKIKup.Models
{
    public class RasporedModel
    {
        [Key]
        public int ID { get; set; }
        public string ImePrijava { get; set; }
        public string PrezimePrijava { get; set; }
        public int RedniBrojPrijava { get; set; }
        public string NacionalnostPrijava { get; set; }
        public string DisciplinaPrijava { get; set; }
        public string StazaPrijava { get; set; }
        public string KategorijaPrijava { get; set; }
    }
}
