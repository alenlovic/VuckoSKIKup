using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class latest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Spol",
                table: "Takmicari");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Spol",
                table: "Takmicari",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
