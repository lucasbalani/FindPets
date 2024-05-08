using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;

using Microsoft.AspNetCore.Mvc;

namespace CoreAPI.Features.AbandonedAnimalReports
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class AbandonedAnimalReportController(IAbandonedAnimalReportService service) : Controller
    {
        [HttpGet]
        public async Task<IList<AbandonedAnimalReport>> ListAsync()
            => await service.ListAbandonedAnimalAsync();

        [HttpPost]
        public async Task<AbandonedAnimalReport> CreateAsync([FromBody] AbandonedAnimalReport request)
            => await service.AddAbandonedAnimal(request);

    }
}
