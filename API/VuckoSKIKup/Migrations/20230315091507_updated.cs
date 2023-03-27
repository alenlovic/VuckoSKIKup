using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class updated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RedniBroj",
                table: "Takmicari",
                newName: "Godiste");

            migrationBuilder.AddColumn<string>(
                name: "Disciplina",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Grad",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Disciplina",
                table: "Takmicari");

            migrationBuilder.DropColumn(
                name: "Grad",
                table: "Takmicari");

            migrationBuilder.RenameColumn(
                name: "Godiste",
                table: "Takmicari",
                newName: "RedniBroj");
        }
    }
}
