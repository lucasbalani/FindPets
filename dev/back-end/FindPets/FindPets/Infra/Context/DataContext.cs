using CoreAPI.Features.AbandonedAnimalReports.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreApi.Infra.Context;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }

    #region DbSets
    public DbSet<AbandonedAnimalReport> AbandonedAnimalReports { get; set; }
    #endregion
}