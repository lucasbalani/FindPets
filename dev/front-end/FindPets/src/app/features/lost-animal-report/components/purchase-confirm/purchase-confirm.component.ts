import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-confirm',
  templateUrl: './purchase-confirm.component.html',
  styleUrls: ['./purchase-confirm.component.scss']
})
export class PurchaseConfirmComponent implements OnInit {
  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<PurchaseConfirmComponent>
  ) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this._formBuilder.group({
      name: ["", Validators.required],
      document: ['', Validators.required],
      price: [69.90],
    });
  }

  confirmPurchase(): void {
    this._dialogRef.close(true);
  }
}
