using CoreAPI.Features.LostAnimalReports.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreApi.Infra.Context;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<LostAnimalReport> LostAnimalReports { get; internal set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }

    #region DbSets

    #endregion
}