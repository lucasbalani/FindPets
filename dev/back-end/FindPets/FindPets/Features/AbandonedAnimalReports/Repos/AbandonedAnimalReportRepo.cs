using CoreApi.Infra.Context;
using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;
using Microsoft.EntityFrameworkCore;


namespace CoreAPI.Features.AbandonedAnimalReports.Repos;

public class AbandonedAnimalReportRepo(DataContext context) : IAbandonedAnimalReportRepo
{
    private readonly DbSet<AbandonedAnimalReport> DataSet = context.AbandonedAnimalReports;

    public async Task<IList<AbandonedAnimalReport>> ListAbandonedAnimalAsync()
           => await DataSet.ToListAsync();

    public async Task<AbandonedAnimalReport> AddAbandonedAnimalAsync(AbandonedAnimalReport abandonedAnimalReport)
    {
        await DataSet.AddAsync(abandonedAnimalReport);
        return abandonedAnimalReport;
    }

    public async Task Commit()
    => await context.SaveChangesAsync();
}

