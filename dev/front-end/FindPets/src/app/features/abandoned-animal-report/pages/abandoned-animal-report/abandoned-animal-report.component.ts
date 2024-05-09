import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abandoned-animal-report',
  templateUrl: './abandoned-animal-report.component.html',
  styleUrls: ['./abandoned-animal-report.component.scss']
})
export class AbandonedAnimalReportComponent implements OnInit {
  form!: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
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

  save(): void {
    const abandonedAnimalReport = this.form.getRawValue();
    console.log(abandonedAnimalReport);
  }
}