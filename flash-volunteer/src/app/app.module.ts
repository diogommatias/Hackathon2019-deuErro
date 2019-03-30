import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './flash-volunteer/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeSearchComponent } from './flash-volunteer/home-search/home-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { CityViewComponent } from './flash-volunteer/city-view/city-view.component';
import { AddEventComponent } from './flash-volunteer/add-event/add-event.component';
<<<<<<< HEAD
import { EventComponent } from './flash-volunteer/event/event.component';
import { SidebarComponent } from './flash-volunteer/sidebar/sidebar.component';
=======
import { EventComponent } from './flash-volunteer/event/event.component'; 
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 0ad214db0c35a1e69cc9a3aa42a1f31672bbe6ba


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSearchComponent,
    CityViewComponent,
    AddEventComponent,
    EventComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfUYkYpDFuQyYYguhGB39Za726DuCcGT8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
