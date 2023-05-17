using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class updatedInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RedniBroj",
                table: "Takmicari");

            migrationBuilder.RenameColumn(
                name: "Nacionalnost",
                table: "Takmicari",
                newName: "ZemljaPorijekla");

            migrationBuilder.RenameColumn(
                name: "Disciplina",
                table: "Takmicari",
                newName: "Spol");

            migrationBuilder.RenameColumn(
                name: "NacionalnostPrijava",
                table: "Raspored",
                newName: "VrijemeTrkePrijava");

            migrationBuilder.AddColumn<string>(
                name: "BrojTelefona",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojTelefona",
                table: "Takmicari");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Takmicari");

            migrationBuilder.RenameColumn(
                name: "ZemljaPorijekla",
                table: "Takmicari",
                newName: "Nacionalnost");

            migrationBuilder.RenameColumn(
                name: "Spol",
                table: "Takmicari",
                newName: "Disciplina");

            migrationBuilder.RenameColumn(
                name: "VrijemeTrkePrijava",
                table: "Raspored",
                newName: "NacionalnostPrijava");

            migrationBuilder.AddColumn<int>(
                name: "RedniBroj",
                table: "Takmicari",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
