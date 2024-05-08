using CoreAPI.Features.AbandonedAnimalReports.Models;

namespace CoreAPI.Features.AbandonedAnimalReports.Contracts
{
    public interface IAbandonedAnimalReportRepo
    {
        Task<IList<AbandonedAnimalReport>> ListAbandonedAnimalAsync();
        Task<AbandonedAnimalReport> AddAbandonedAnimalAsync(AbandonedAnimalReport abandonedAnimalReport);
        Task Commit();
    }
}
