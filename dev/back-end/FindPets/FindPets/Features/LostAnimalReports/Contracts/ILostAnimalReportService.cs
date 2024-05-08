using CoreAPI.Features.LostAnimalReports.Models;

namespace CoreAPI.Features.LostAnimalReports.Contracts;

public interface ILostAnimalReportService
{
    Task<IList<LostAnimalReport>> ListLostAnimalAsync();
    Task<LostAnimalReport> AddLostAnimalAsync(LostAnimalReport lostAnimalReport);
}
