import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: CarListComponent
  }
  ,
  {
    path: 'car-form',
    component: CarFormComponent
  }
  ,
  {
    path: 'user-form',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
