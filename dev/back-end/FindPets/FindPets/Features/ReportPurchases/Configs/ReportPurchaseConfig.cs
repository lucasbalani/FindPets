using CoreAPI.Features.ReportPurchases.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreAPI.Features.ReportPurchases.Configs
{
    public class ReportPurchaseConfig : IEntityTypeConfiguration<ReportPurchase>
    {
        public void Configure(EntityTypeBuilder<ReportPurchase> builder)
        {

            builder.HasKey(x => x.Id);
        }
    }
