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
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomePageComponent,
    DenunciationComponent,
    LostAnimalReportComponent,
    SelectSearchComponent,
    SearchPipe
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
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
