using PetsApi.Features.AnimalTypes.Contracts;
using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Features.AnimalTypes.Services;

public class AnimalTypeService(IAnimalTypeRepo repo) : IAnimalTypeService
{
    public async Task<IList<AnimalType>> ListPetsAsync()
        => await repo.ListPetsAsync();
}
