import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './flash-volunteer/home/home.component';
import { SearchPageComponent } from './flash-volunteer/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Flash Volunteer'
    },
  },
  {
    path: 'cities/:city',
    component: SearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
