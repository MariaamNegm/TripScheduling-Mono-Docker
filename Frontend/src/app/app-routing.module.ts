import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStationComponent } from './station/add-station/add-station.component';
import { LoginComponent } from './login/login.component';
import { StationListComponent } from './station/station-list/station-list.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { UpdatetripComponent } from './trip/updatetrip/updatetrip.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchbyidComponent } from './station/searchbyid/searchbyid.component';
import { SearchtripbynameComponent } from './trip/searchtripbyname/searchtripbyname.component';
import { RemoveStationComponent } from './station/deletebyId/remove-station.component';
import { RemoveTripComponent } from './trip/remove-trip/remove-trip.component';
import { SearchbynameComponent } from './station/searchbyname/searchbyname.component';
import { ModifydetailsComponent } from './trip/modifydetails/modifydetails.component';

const routes: Routes = [

{path:'',component:RegisterComponent},
{path:'station',component:StationListComponent},
{path:'add-station',component:AddStationComponent},
{path:'trip',component:TripListComponent},
{path:'add-trip',component:AddTripComponent},
{path:'updatetrip',component:UpdatetripComponent},
{path: "login",component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'add-trip',component:AddTripComponent},
{path:'searchtrip',component:SearchtripbynameComponent},
{path:'removestation',component:RemoveStationComponent},
{path:'removetrip',component:RemoveTripComponent},
{path:'searchstation',component:SearchbynameComponent},
{path:'modify/:id',component:ModifydetailsComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
