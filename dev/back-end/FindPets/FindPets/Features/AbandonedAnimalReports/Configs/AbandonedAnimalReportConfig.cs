using CoreAPI.Features.AbandonedAnimalReports.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreAPI.Features.AbandonedAnimalReports.Configs
{
    public class AbandonedAnimalReportConfig : IEntityTypeConfiguration<AbandonedAnimalReport>
    {
        public void Configure(EntityTypeBuilder<AbandonedAnimalReport> builder)
        {
            builder.HasKey(x => x.Id);
        }
    }
}
