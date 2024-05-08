using CoreAPI.Features.AbandonedAnimalReports.Contracts;
using CoreAPI.Features.AbandonedAnimalReports.Repos;
using CoreAPI.Features.AbandonedAnimalReports.Services;

namespace CoreAPI.Features.AbandonedAnimalReports.IoC
{
    public static class AbandonedAnimalReportDl
    {
        public static IServiceCollection AddAbandonedAnimalReportInfrastructure(this IServiceCollection services)
        {
            services.AddScoped<IAbandonedAnimalReportService, AbandonedAnimalReportService>();
            services.AddScoped<IAbandonedAnimalReportRepo, AbandonedAnimalReportRepo>();

            return services;
        }
    }
}
