using Microsoft.AspNetCore.Mvc;

using PetsApi.Features.AnimalTypes.Contracts;
using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Features.AnimalTypes;

[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class AnimalTypesController(IAnimalTypeService service) : Controller
{
    [HttpGet]
    public async Task<IList<AnimalType>> ListAsync()
        => await service.ListPetsAsync();
}
