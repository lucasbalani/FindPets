import { SizeAnimal } from "src/app/shared/enums/size-animal.enum";

export interface LostAnimalReport {
    id: number;
    animalTypeId: number;
    breed: string;
    color: string;
    size: SizeAnimal;
    lostDate: Date;
    lastLocation: string;
    email: string;
    numberContact: string;
    image?: string;
    acceptShareNumber: boolean;
    acceptShareImagePet: boolean;
}