using CoreAPI.Shared.Enums;
using System.Drawing;

namespace CoreAPI.Features.LostAnimalReports.Models;

public class LostAnimalReport
{
    public long Id { get; private set; }
    public long AnimalTypeId { get; private set; }
    public string Breed { get; private set; }
    public string Color { get; private set; }
    public AnimalSize Size { get; private set;}
    public DateTime LostDate {  get; private set; }
    public string LastLocation {  get; private set; }
    public string Email { get; private set; }
    public string NumberContact {  get; private set; }
    public string? Image {  get; private set; }
    public bool AcceptShareNumber {  get; private set; }
    public bool AcceptShareImagePet {  get; private set; }

    public LostAnimalReport(long id, long animalTypeId, string breed, string color, AnimalSize size, 
        DateTime lostDate, string lastLocation, string email, string numberContact, string? image, bool acceptShareNumber, bool acceptShareImagePet)
    {
        Id = id;
        AnimalTypeId = animalTypeId;
        Breed = breed;
        Color = color;
        Size = size;
        LostDate = lostDate;
        LastLocation = lastLocation;
        Email = email;
        NumberContact = numberContact;
        Image = image;
        AcceptShareNumber = acceptShareNumber;
        AcceptShareImagePet = acceptShareImagePet;
    }
}
