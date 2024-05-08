namespace CoreAPI.Features.ReportPurchases.Models;

public class ReportPurchase
{
    public long Id { get; private set; }
    public string Name { get; private set; }
    public string Document { get; private set; }
    public Decimal Price { get; private set; }

    public ReportPurchase(string name, string document, Decimal price)
    {
        Name = name;
        Document = document;
        Price = price;
    }
}
