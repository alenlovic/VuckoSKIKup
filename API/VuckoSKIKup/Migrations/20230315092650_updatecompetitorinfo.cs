using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class updatecompetitorinfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Grad",
                table: "Takmicari");

            migrationBuilder.AddColumn<int>(
                name: "RedniBroj",
                table: "Takmicari",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RedniBroj",
                table: "Takmicari");

            migrationBuilder.AddColumn<string>(
                name: "Grad",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
