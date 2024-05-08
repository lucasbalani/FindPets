using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Features.AnimalTypes.Contracts;

public interface IAnimalTypeRepo
{
    Task<IList<AnimalType>> ListPetsAsync();
}
