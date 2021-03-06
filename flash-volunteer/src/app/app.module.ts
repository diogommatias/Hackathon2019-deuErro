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
import { EventComponent } from './flash-volunteer/event/event.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from './flash-volunteer/event-card/event-card.component';
import { SearchPageComponent } from './flash-volunteer/search-page/search-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OrganizationPageComponent } from './flash-volunteer/organization-page/organization-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EventRegistDialogComponent } from './flash-volunteer/event-regist-dialog/event-regist-dialog.component';
import { PrizesComponent } from './flash-volunteer/prizes/prizes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider';
import { EventCardOrganizationComponent } from './flash-volunteer/event-card-organization/event-card-organization.component'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSearchComponent,
    CityViewComponent,
    AddEventComponent,
    EventComponent,
    EventCardComponent,
    SearchPageComponent,
    EventRegistDialogComponent,
    PrizesComponent,
    OrganizationPageComponent,
    EventRegistDialogComponent,
    EventCardOrganizationComponent
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
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonToggleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfUYkYpDFuQyYYguhGB39Za726DuCcGT8'
    })
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventRegistDialogComponent]
})
export class AppModule { }
