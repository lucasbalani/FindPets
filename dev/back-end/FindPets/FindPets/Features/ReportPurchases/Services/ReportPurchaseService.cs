using CoreAPI.Features.ReportPurchases.Contracts;
using CoreAPI.Features.ReportPurchases.Models;

namespace CoreAPI.Features.ReportPurchases.Services;

public class ReportPurchaseService(IReportPurchaseRepo repo) : IReportPurchaseService
{
    public async Task<ReportPurchase> AddReportPurchase(ReportPurchase request)
    {
        var entity = await repo.AddReportPurchase(request);
        await repo.Commit();
        return entity;
    }

    public async Task<IList<ReportPurchase>> ListAsync()
        => await repo.ListReportPurchaseAsync();

}
