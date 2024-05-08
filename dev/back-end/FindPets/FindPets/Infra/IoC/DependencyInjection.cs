using CoreApi.Infra.Context;
using CoreAPI.Features.AbandonedAnimalReports.IoC;
using Microsoft.EntityFrameworkCore;

namespace CoreApi.Infra.IoC;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration config)
    {
        #region DbContext

        var dbHost = config["DB_HOST"];
        var dbPort = config["DB_PORT"];
        var dbDatabase = config["DB_DATABASE"];
        var dbUser = config["DB_USER"];
        var dbPassword = config["DB_PWD"];

        var connectionString = $"server={dbHost};port={dbPort};userid={dbUser};pwd={dbPassword};database={dbDatabase};default command timeout=0;";

        services.AddDbContext<DataContext>(options => { options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)); });

        #endregion

        //services.AddExceptionHandler<GlobalExceptionHandler>();
        //services.AddProblemDetails();

        //services.AddAutoMapper(typeof(Program).Assembly);

        services.AddAbandonedAnimalReportInfrastructure();

        return services;
    }

    public static IApplicationBuilder UseInfrastructure(this IApplicationBuilder app)
    {
        app.UseExceptionHandler();

        return app;
    }
}