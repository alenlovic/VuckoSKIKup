﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VuckoSKIKup.Database;

#nullable disable

namespace VuckoSKIKup.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230416162454_update")]
    partial class update
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("VuckoSKIKup.Models.RasporedModel", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("DisciplinaPrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImePrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KategorijaPrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NacionalnostPrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PrezimePrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RedniBrojPrijava")
                        .HasColumnType("int");

                    b.Property<string>("StazaPrijava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Raspored");
                });

            modelBuilder.Entity("VuckoSKIKup.Models.TakmicariModel", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Disciplina")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Godiste")
                        .HasColumnType("int");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nacionalnost")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RedniBroj")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Takmicari");
                });
#pragma warning restore 612, 618
        }
    }
}
