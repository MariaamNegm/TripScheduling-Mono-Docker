import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import { StationListComponent } from './station/station-list/station-list.component';
import { AddStationComponent } from './station/add-station/add-station.component';
import {FormsModule} from '@angular/forms';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { RemoveTripComponent } from './trip/remove-trip/remove-trip.component';
import { RemoveStationComponent } from './station/deletebyId/remove-station.component';
import { SearchbyidComponent } from './station/searchbyid/searchbyid.component';
import { SearchbynameComponent } from './station/searchbyname/searchbyname.component';
import { SearchPipe } from './station/searchbyid/search.pipe';
import { SearchtripbynameComponent } from './trip/searchtripbyname/searchtripbyname.component';
import { UpdatetripComponent } from './trip/updatetrip/updatetrip.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ModifydetailsComponent } from './trip/modifydetails/modifydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StationListComponent,
    AddStationComponent,
    TripListComponent,
    AddTripComponent,
    RemoveTripComponent,
    RemoveStationComponent,
    SearchbyidComponent,
    SearchbynameComponent,
    SearchPipe,
    SearchtripbynameComponent,
    UpdatetripComponent,
    RegisterComponent,
    HomeComponent,
    ModifydetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
