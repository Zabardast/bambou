import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AtelierComponent } from './page/atelier/atelier.component';
import { GammeComponent } from './page/gamme/gamme.component';
import { PanneauAdministrationComponent } from './page/panneau-administration/panneau-administration.component';
import { RealisationComponent } from './page/realisation/realisation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: PanneauAdministrationComponent
  },
  {
    path: 'realisation',
    component: RealisationComponent
  },
  {
    path: 'gamme',
    component: GammeComponent
  },
  {
    path: 'atelier',
    component: AtelierComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
