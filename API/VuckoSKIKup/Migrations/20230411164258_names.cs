using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class names : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Staza",
                table: "Raspored",
                newName: "StazaPrijava");

            migrationBuilder.RenameColumn(
                name: "RedniBroj",
                table: "Raspored",
                newName: "RedniBrojPrijava");

            migrationBuilder.RenameColumn(
                name: "PrezimeTakmičara",
                table: "Raspored",
                newName: "PrezimePrijava");

            migrationBuilder.RenameColumn(
                name: "NacionalnostTakmičara",
                table: "Raspored",
                newName: "NacionalnostPrijava");

            migrationBuilder.RenameColumn(
                name: "Kategorija",
                table: "Raspored",
                newName: "KategorijaPrijava");

            migrationBuilder.RenameColumn(
                name: "ImeTakmičara",
                table: "Raspored",
                newName: "ImePrijava");

            migrationBuilder.RenameColumn(
                name: "Disciplina",
                table: "Raspored",
                newName: "DisciplinaPrijava");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StazaPrijava",
                table: "Raspored",
                newName: "Staza");

            migrationBuilder.RenameColumn(
                name: "RedniBrojPrijava",
                table: "Raspored",
                newName: "RedniBroj");

            migrationBuilder.RenameColumn(
                name: "PrezimePrijava",
                table: "Raspored",
                newName: "PrezimeTakmičara");

            migrationBuilder.RenameColumn(
                name: "NacionalnostPrijava",
                table: "Raspored",
                newName: "NacionalnostTakmičara");

            migrationBuilder.RenameColumn(
                name: "KategorijaPrijava",
                table: "Raspored",
                newName: "Kategorija");

            migrationBuilder.RenameColumn(
                name: "ImePrijava",
                table: "Raspored",
                newName: "ImeTakmičara");

            migrationBuilder.RenameColumn(
                name: "DisciplinaPrijava",
                table: "Raspored",
                newName: "Disciplina");
        }
    }
}
