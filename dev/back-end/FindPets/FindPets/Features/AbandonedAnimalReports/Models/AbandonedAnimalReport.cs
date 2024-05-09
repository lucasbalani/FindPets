using CoreAPI.Shared.Enums;

namespace CoreAPI.Features.AbandonedAnimalReports.Models;

public class AbandonedAnimalReport
{
    public long Id { get; private set; }
    public long AnimalTypeId { get; private set; }
    public string Breed { get; private set; }
    public string Color { get; private set; }
    public AnimalSize Size { get; private set; }
    public string ReferencePoint { get; private set; }
    public string Address { get; private set; }
    public string? Image { get; private set; }
    public bool AcceptShareImagePet { get; private set; }

    public AbandonedAnimalReport(long animalTypeId, string breed, string color,
                                 AnimalSize size, string referencePoint, string address, string? image,
                                 bool acceptShareImagePet)
    {
        AnimalTypeId = animalTypeId;
        Breed = breed;
        Color = color;
        Size = size;
        ReferencePoint = referencePoint;
        Address = address;
        Image = image;
        AcceptShareImagePet = acceptShareImagePet;
    }
}

