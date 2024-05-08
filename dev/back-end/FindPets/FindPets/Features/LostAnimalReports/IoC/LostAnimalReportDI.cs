using CoreAPI.Features.LostAnimalReports.Contracts;
using CoreAPI.Features.LostAnimalReports.Repos;
using CoreAPI.Features.LostAnimalReports.Services;

namespace CoreAPI.Features.LostAnimalReports.IoC;

public static class LostAnimalReportDI
{
    public static IServiceCollection AddLostAnimalReportInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<ILostAnimalReportService, LostAnimalReportService>();
        services.AddScoped<ILostAnimalReportRepo, LostAnimalReportRepo>();

        return services;
    }
}
