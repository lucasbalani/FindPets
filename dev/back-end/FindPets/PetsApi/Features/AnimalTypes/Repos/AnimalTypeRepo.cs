using Microsoft.EntityFrameworkCore;

using PetsApi.Features.AnimalTypes.Contracts;
using PetsApi.Features.AnimalTypes.Models;
using PetsApi.Infra.Context;

namespace PetsApi.Features.AnimalTypes.Repos;

public class AnimalTypeRepo(DataContext context) : IAnimalTypeRepo
{
    private readonly DbSet<AnimalType> DataSet = context.AnimalTypes;

    public async Task<IList<AnimalType>> ListPetsAsync()
        => await DataSet.ToListAsync();
}
