using CoreApi.Infra.Context;
using CoreAPI.Features.LostAnimalReports.Contracts;
using CoreAPI.Features.LostAnimalReports.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreAPI.Features.LostAnimalReports.Repos;

public class LostAnimalReportRepo(DataContext context) : ILostAnimalReportRepo
{
    private readonly DbSet<LostAnimalReport> DataSet = context.LostAnimalReports;

    public async Task<IList<LostAnimalReport>> ListLostAnimalReportAsync() 
        => await DataSet.ToListAsync();
}
