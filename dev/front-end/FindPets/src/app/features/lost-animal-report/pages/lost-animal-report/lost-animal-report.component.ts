import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lost-animal-report',
  templateUrl: './lost-animal-report.component.html',
  styleUrls: ['./lost-animal-report.component.scss']
})
export class LostAnimalReportComponent implements OnInit {
  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
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
      acceptShareNumber: [false, Validators.required],
      acceptShareImagePet: [false, Validators.required],
    });
  }

  save(): void {
    const lostAnimalReport = this.form.getRawValue();

    console.log(lostAnimalReport);
  }
}
