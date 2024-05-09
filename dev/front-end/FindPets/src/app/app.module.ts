import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './features/homepage/pages/home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DenunciationComponent } from './features/denunciation/pages/denunciation/denunciation.component';
import { MatDividerModule } from '@angular/material/divider';
import { LostAnimalReportComponent } from './features/lost-animal-report/pages/lost-animal-report/lost-animal-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SelectSearchComponent } from './shared/components/select-search/select-search.component';
import { SearchPipe } from './shared/pipes/search-pipe/search.pipe';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import localePt from '@angular/common/locales/pt';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { PurchaseConfirmComponent } from './features/lost-animal-report/components/purchase-confirm/purchase-confirm.component';

registerLocaleData(localePt, 'pt-Br');

export const CUSTOM_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomePageComponent,
    DenunciationComponent,
    LostAnimalReportComponent,
    SelectSearchComponent,
    SearchPipe,
    PurchaseConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    A11yModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    PortalModule,
    ScrollingModule,
    MatOptionModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMAT },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-Br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
