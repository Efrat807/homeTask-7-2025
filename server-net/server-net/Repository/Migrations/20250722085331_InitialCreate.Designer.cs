﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Repository.DB;

#nullable disable

namespace Repository.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250722085331_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Repository.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "פירות"
                        },
                        new
                        {
                            Id = 2,
                            Name = "ירקות"
                        },
                        new
                        {
                            Id = 3,
                            Name = "מוצרי חלב"
                        });
                });

            modelBuilder.Entity("Repository.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            Name = "תפוחים",
                            Price = 5m
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            Name = "בננות",
                            Price = 6m
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 1,
                            Name = "תפוזים",
                            Price = 7m
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 2,
                            Name = "עגבניות",
                            Price = 4m
                        },
                        new
                        {
                            Id = 5,
                            CategoryId = 2,
                            Name = "מלפפונים",
                            Price = 3m
                        },
                        new
                        {
                            Id = 6,
                            CategoryId = 2,
                            Name = "גזר",
                            Price = 2.5m
                        },
                        new
                        {
                            Id = 7,
                            CategoryId = 3,
                            Name = "חלב",
                            Price = 5m
                        },
                        new
                        {
                            Id = 8,
                            CategoryId = 3,
                            Name = "יוגורט",
                            Price = 4m
                        },
                        new
                        {
                            Id = 9,
                            CategoryId = 3,
                            Name = "גבינה לבנה",
                            Price = 8m
                        },
                        new
                        {
                            Id = 10,
                            CategoryId = 3,
                            Name = "שמנת מתוקה",
                            Price = 6m
                        });
                });

            modelBuilder.Entity("Repository.Entities.Product", b =>
                {
                    b.HasOne("Repository.Entities.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("Repository.Entities.Category", b =>
                {
                    b.Navigation("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
