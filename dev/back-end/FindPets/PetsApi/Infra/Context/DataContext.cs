using Microsoft.EntityFrameworkCore;

using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Infra.Context;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }

    #region DbSets
    public DbSet<AnimalType> AnimalTypes { get; set; }
    #endregion
}