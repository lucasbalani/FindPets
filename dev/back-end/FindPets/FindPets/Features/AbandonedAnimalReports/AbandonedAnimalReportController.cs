using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Models;

using Microsoft.AspNetCore.Mvc;

namespace CoreAPI.Features.AbandonedAnimalReports
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class AbandonedAnimalReportController(IAbandonedAnimalReportService service) : ControllerBase
    {

    }
}
