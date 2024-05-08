using CoreAPI.Features.LostAnimalReports.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreAPI.Features.LostAnimalReports.Configs;

public class LostAnimalReportConfig : IEntityTypeConfiguration<LostAnimalReport>
{
    public void Configure(EntityTypeBuilder<LostAnimalReport> builder)
    {
        builder.HasKey(x => x.Id);
    }
}
