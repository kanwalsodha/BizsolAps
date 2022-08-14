
using Microsoft.EntityFrameworkCore.Migrations;

namespace BO.Migrations
{
    public partial class newcolumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Fields1",
                table: "Developers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Fields2",
                table: "Developers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Fields3",
                table: "Developers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fields1",
                table: "Developers");

            migrationBuilder.DropColumn(
                name: "Fields2",
                table: "Developers");

            migrationBuilder.DropColumn(
                name: "Fields3",
                table: "Developers");
        }
    }
}
