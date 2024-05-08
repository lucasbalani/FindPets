using CoreAPI.Features.ReportPurchases.Contracts;
using CoreAPI.Features.ReportPurchases.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreAPI.Features.ReportPurchases;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class ReportPurchaseController(IReportPurchaseService service) : Controller
{
    [HttpPost]
    public async Task<ReportPurchase> CreateAsync([FromBody] ReportPurchase request)
         => await service.AddReportPurchase(request);

    [HttpGet]
    public async Task<IList<ReportPurchase>> ListAsync()
        => await service.ListAsync();

}
