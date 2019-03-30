import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './flash-volunteer/home/home.component';
import { CityViewComponent } from './flash-volunteer/city-view/city-view.component';
<<<<<<< HEAD
import { SidebarComponent } from './flash-volunteer/sidebar/sidebar.component';
=======
import { AddEventComponent } from './flash-volunteer/add-event/add-event.component';
>>>>>>> 0ad214db0c35a1e69cc9a3aa42a1f31672bbe6ba

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'city',
    component: CityViewComponent
  },
  {
<<<<<<< HEAD
    path: 'sidebar',
    component: SidebarComponent
=======
    path: 'add',
    component: AddEventComponent
>>>>>>> 0ad214db0c35a1e69cc9a3aa42a1f31672bbe6ba
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
