import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalType } from 'src/app/features/integrations/animal-type/models/animal-type.model';
import { AnimalTypeService } from 'src/app/features/integrations/animal-type/services/animal-type.service';
import { SearchOption } from 'src/app/shared/pipes/search-pipe/search.model';
import { SearchUtils } from 'src/app/shared/pipes/search-pipe/search.utils';
import { LostAnimalReportService } from '../../services/lost-animal-report.service';
import { LostAnimalReport } from '../../models/lost-animal-report.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseConfirmComponent } from '../../components/purchase-confirm/purchase-confirm.component';

@Component({
  selector: 'app-lost-animal-report',
  templateUrl: './lost-animal-report.component.html',
  styleUrls: ['./lost-animal-report.component.scss']
})
export class LostAnimalReportComponent implements OnInit {
  form!: FormGroup;
  animalTypeOptions: SearchOption[] = [];
  sizeOptions: SearchOption[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _animalTypeService: AnimalTypeService,
    private _service: LostAnimalReportService,
    private _router: Router,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.fillPetOptions();
    this.fillSizeOptions();
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

  createForm(): void {
    this.form = this._formBuilder.group({
      animalTypeId: [null, Validators.required],
      breed: ['', Validators.required],
      color: ['', Validators.required],
      size: [null, Validators.required],
      lostDate: [null, Validators.required],
      lastLocation: ['', Validators.required],
      email: ['', Validators.required],
      numberContact: ['', Validators.required],
      image: [''],
      acceptShareNumber: [false, Validators.requiredTrue],
      acceptShareImagePet: [false],
    });
  }

  save(): void {
    const lostAnimalReport: LostAnimalReport = this.form.getRawValue();

    this._service.create(lostAnimalReport).subscribe({
      next: (lostAnimalReport: LostAnimalReport) => {
        this._router.navigate(["default"]);
      }
    });
  }

  openPurchaseForm(): void {
    const dialog = this._dialog.open(PurchaseConfirmComponent, {
      panelClass: ["col-12", "col-md-6"],
      disableClose: false
    })

    dialog.afterClosed().subscribe({
      next: (confirmed: boolean) => {
        if (!!confirmed)
          this.save();
      }
    });
  }
}
