using CoreAPI.Features.AbandonedAnimalReports.Models;

namespace CoreAPI.Features.AbandonedAnimalReports.Contracts
{
    public interface IAbandonedAnimalReportService
    {
        Task<AbandonedAnimalReport> AddAbandonedAnimal(AbandonedAnimalReport request);
        Task<IList<AbandonedAnimalReport>> ListAbandonedAnimalAsync();
    }
}
