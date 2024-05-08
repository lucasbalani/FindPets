using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;

namespace CoreAPI.Features.AbandonedAnimalReports.Services;

public class AbandonedAnimalReportService(IAbandonedAnimalReportRepo repo) : IAbandonedAnimalReportService
{
    public async Task<IList<AbandonedAnimalReport>> ListAbandonedAnimalAsync()
    => await repo.ListAbandonedAnimalAsync();

    public async Task<AbandonedAnimalReport> AddAbandonedAnimal(AbandonedAnimalReport request)
    {
        var entity = await repo.AddAbandonedAnimalAsync(request);
        repo.Commit();
        return entity;
    }
}
