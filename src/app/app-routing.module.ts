import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   title: 'Home'
  // },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details'
  },
  // {
  //   path: '**',
  //   component: ErrorComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
