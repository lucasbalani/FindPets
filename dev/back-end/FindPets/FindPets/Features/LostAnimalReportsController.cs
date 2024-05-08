using CoreAPI.Features.LostAnimalReports.Contracts;
using CoreAPI.Features.LostAnimalReports.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreAPI.Features;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class LostAnimalReportsController(ILostAnimalReportService service) : Controller
{
    [HttpGet]
    public async Task<IList<LostAnimalReport>> ListAsync()
        => await service.ListLostAnimalAsync();
}
