using CoreAPI.Features.ReportPurchases.Models;

namespace CoreAPI.Features.ReportPurchases.Contracts;
public interface IReportPurchaseRepo
{
    Task<ReportPurchase> AddReportPurchase(ReportPurchase request);
    Task Commit();
    Task<IList<ReportPurchase>> ListReportPurchaseAsync();
}
