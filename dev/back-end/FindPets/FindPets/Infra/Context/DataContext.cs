using CoreAPI.Features.AbandonedAnimalReports.Models;
using CoreAPI.Features.LostAnimalReports.Models;
using CoreAPI.Features.ReportPurchases.Models;
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
    public DbSet<LostAnimalReport> LostAnimalReports { get; set; }
    public DbSet<ReportPurchase> ReportPurshases { get; set; }
    #endregion
}