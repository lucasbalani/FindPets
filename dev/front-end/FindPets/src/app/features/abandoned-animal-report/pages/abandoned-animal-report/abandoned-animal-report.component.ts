import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalType } from 'src/app/features/integrations/animal-type/models/animal-type.model';
import { AnimalTypeService } from 'src/app/features/integrations/animal-type/services/animal-type.service';
import { SearchOption } from 'src/app/shared/pipes/search-pipe/search.model';
import { SearchUtils } from 'src/app/shared/pipes/search-pipe/search.utils';

@Component({
  selector: 'app-abandoned-animal-report',
  templateUrl: './abandoned-animal-report.component.html',
  styleUrls: ['./abandoned-animal-report.component.scss']
})
export class AbandonedAnimalReportComponent implements OnInit {
  form!: FormGroup;
  animalTypeOptions: SearchOption[] = [];
  sizeOptions: SearchOption[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _animalTypeService: AnimalTypeService,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.fillPetOptions();
    this.fillSizeOptions();
  }

  createForm(): void {
    this.form = this._formBuilder.group({
      animalTypeId: [null, Validators.required],
      breed: ['', Validators.required],
      color: ['', Validators.required],
      size: [null, Validators.required],
      referencePoint: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      acceptShareImagePet: [false, Validators.required],
    });
  }

  fillPetOptions(): void {
    this._animalTypeService.list().subscribe({
      next: (animalTypes: AnimalType[]) => this.animalTypeOptions = SearchUtils.toSearchOptions(animalTypes, "id", ["name"])
    });
  }

  fillSizeOptions(): void {
    const sizes = [
      { id: 1, name: "Porte pequeno" },
      { id: 2, name: "Porte médio" },
      { id: 3, name: "Porte grande" }
    ];

    this.sizeOptions = SearchUtils.toSearchOptions(sizes, "id", ["name"]);
  }

  save(): void {
    const abandonedAnimalReport = this.form.getRawValue();
    console.log(abandonedAnimalReport);
  }
}