using CoreAPI.Features.ReportPurchases.Models;

namespace CoreAPI.Features.ReportPurchases.Contracts;
public interface IReportPurchaseService
{
    Task<ReportPurchase> AddReportPurchase(ReportPurchase request);
    Task<IList<ReportPurchase>> ListAsync();
}
