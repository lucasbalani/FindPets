using CoreApi.Infra.Context;
using CoreAPI.Features.ReportPurchases.Contracts;
using CoreAPI.Features.ReportPurchases.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreAPI.Features.ReportPurchases.Repos
{
    public class ReportPurchaseRepo(DataContext context) : IReportPurchaseRepo
    {
        private readonly DbSet<ReportPurchase> DataSet = context.ReportPurshases;

        public async Task<ReportPurchase> AddReportPurchase(ReportPurchase reportPurchase)
        {
            await DataSet.AddAsync(reportPurchase);
            return reportPurchase;
        }

        public async Task Commit()
        => await context.SaveChangesAsync();

        public async Task<IList<ReportPurchase>> ListReportPurchaseAsync()
        => await DataSet.ToListAsync();
    }
}
