using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetsApi.Features.AnimalTypes.Models;

namespace PetsApi.Features.AnimalTypes.Configs;

public class AnimalTypeConfig : IEntityTypeConfiguration<AnimalType>
{
    public void Configure(EntityTypeBuilder<AnimalType> builder)
    {
        builder.HasKey(x => x.Id);
    }
}
