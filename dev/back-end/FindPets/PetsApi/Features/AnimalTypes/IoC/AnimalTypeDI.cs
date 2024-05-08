using PetsApi.Features.AnimalTypes.Contracts;
using PetsApi.Features.AnimalTypes.Repos;
using PetsApi.Features.AnimalTypes.Services;

namespace PetsApi.Features.AnimalTypes.IoC;

public static class AnimalTypeDI
{
    public static IServiceCollection AddAnimalTypeInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IAnimalTypeService, AnimalTypeService>();
        services.AddScoped<IAnimalTypeRepo, AnimalTypeRepo>();

        return services;
    }
}
