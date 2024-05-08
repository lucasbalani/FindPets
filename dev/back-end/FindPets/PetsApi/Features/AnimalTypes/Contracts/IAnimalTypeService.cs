using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Features.AnimalTypes.Contracts;

public interface IAnimalTypeService
{
    Task<IList<AnimalType>> ListPetsAsync();
}
