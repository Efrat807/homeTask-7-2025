using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repository.Entities;


namespace Repository.DB
{
    public class AppDbContext: DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "פירות" },
                new Category { Id = 2, Name = "ירקות" },
                new Category { Id = 3, Name = "מוצרי חלב" }
            );
            modelBuilder.Entity<Product>()
           .Property(p => p.Price)
           .HasPrecision(18, 2);

            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "תפוחים", Price = 5, CategoryId = 1 },
                new Product { Id = 2, Name = "בננות", Price = 6, CategoryId = 1 },
                new Product { Id = 3, Name = "תפוזים", Price = 7, CategoryId = 1 },
                new Product { Id = 4, Name = "עגבניות", Price = 4, CategoryId = 2 },
                new Product { Id = 5, Name = "מלפפונים", Price = 3, CategoryId = 2 },
                new Product { Id = 6, Name = "גזר", Price = 2.5m, CategoryId = 2 },
                new Product { Id = 7, Name = "חלב", Price = 5, CategoryId = 3 },
                new Product { Id = 8, Name = "יוגורט", Price = 4, CategoryId = 3 },
                new Product { Id = 9, Name = "גבינה לבנה", Price = 8, CategoryId = 3 },
                new Product { Id = 10, Name = "שמנת מתוקה", Price = 6, CategoryId = 3 }
            );
        }
    }
}
