using CoreAPI.Features.ReportPurchases.Contracts;
using CoreAPI.Features.ReportPurchases.Repos;
using CoreAPI.Features.ReportPurchases.Services;

namespace CoreAPI.Features.ReportPurchases.IoC;

public static class ReportPurchaseDl
{
    public static IServiceCollection AddAReportPurchaseInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IReportPurchaseRepo, ReportPurchaseRepo>();
        services.AddScoped<IReportPurchaseService, ReportPurchaseService>();
        return services;
    }
}
