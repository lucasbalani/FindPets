using CoreAPI.Features.LostAnimalReports.Contracts;
using CoreAPI.Features.LostAnimalReports.Models;

namespace CoreAPI.Features.LostAnimalReports.Services;

public class LostAnimalReportService(ILostAnimalReportRepo repo) : ILostAnimalReportService
{
    public async Task<IList<LostAnimalReport>> ListLostAnimalAsync()
            => await repo.ListLostAnimalAsync();
}

