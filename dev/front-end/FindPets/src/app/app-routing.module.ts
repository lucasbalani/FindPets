import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './features/homepage/pages/home-page/home-page.component';
import { DenunciationComponent } from './features/denunciation/pages/denunciation/denunciation.component';

const routes: Routes = [
  {
    path: 'default', component: DefaultLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'denunciation', component: DenunciationComponent }
    ]
  },
  { path: '**', redirectTo: 'default' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
