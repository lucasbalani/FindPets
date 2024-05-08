using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;

namespace CoreAPI.Features.AbandonedAnimalReports.Services;

public class AbandonedAnimalReportService : IAbandonedAnimalReportService
{
    private readonly IAbandonedAnimalReportRepo _repo;

    public AbandonedAnimalReportService(IAbandonedAnimalReportRepo repo)
    {
        _repo = repo;
    }

  
}
