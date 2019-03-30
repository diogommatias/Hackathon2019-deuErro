import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './flash-volunteer/home/home.component';
import { CityViewComponent } from './flash-volunteer/city-view/city-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'city',
    component: CityViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
