using CoreApi.Infra.Context;
using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;
using Microsoft.EntityFrameworkCore;


namespace CoreAPI.Features.AbandonedAnimalReports.Repos;

public class AbandonedAnimalReportRepo(DataContext context) : IAbandonedAnimalReportRepo
{
    private readonly DbSet<AbandonedAnimalReport> DataSet = context.AbandonedAnimalReports;

    public async Task<IList<AbandonedAnimalReport>> ListAbandonedAnimalReport()
        => await DataSet.ToListAsync();
}
