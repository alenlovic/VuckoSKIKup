using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    /// <inheritdoc />
    public partial class rasporedmodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Staze");

            migrationBuilder.RenameColumn(
                name: "Disciplina",
                table: "Discipline",
                newName: "Staza");

            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Discipline",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Kategorija",
                table: "Discipline",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Raspored",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImeTakmičara = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrezimeTakmičara = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RedniBroj = table.Column<int>(type: "int", nullable: false),
                    NacionalnostTakmičara = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Disciplina = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Staza = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kategorija = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Raspored", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Raspored");

            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Discipline");

            migrationBuilder.DropColumn(
                name: "Kategorija",
                table: "Discipline");

            migrationBuilder.RenameColumn(
                name: "Staza",
                table: "Discipline",
                newName: "Disciplina");

            migrationBuilder.CreateTable(
                name: "Staze",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Staza = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Staze", x => x.ID);
                });
        }
    }
}
