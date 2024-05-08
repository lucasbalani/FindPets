namespace PetsApi.Features.AnimalTypes.Models;

public class AnimalType
{
    public long Id { get; private set; }
    public string Name { get; private set; }

    public AnimalType(string name)
        => Name = name;

    public void Update(string name)
        => Name = name;

    public bool Validate()
        => !string.IsNullOrEmpty(Name);
}
