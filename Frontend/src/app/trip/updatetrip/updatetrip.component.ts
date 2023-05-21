import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/model/trip/trip';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';
import { TripService } from 'src/app/services/trip/trip.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.css']
})
export class UpdatetripComponent implements OnInit {
 trips:any;
 id?:number;
 //trip:any;
  constructor(private tripservice:TripService,private http:HttpClient,private router:Router){}
  ngOnInit()  {
    let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/trip"); 
    response.subscribe((data)=>this.trips=data);
  }

  
updatetrip(id:number){
  console.log("id" + this.id);
   //this.router.navigate(['/modify',id]);
   this.router.navigate(['/modify/']);
}
  updateTrip(id:number, ti: Trip) {
    //return this.trip.update({
      //toid:this.trip.toid,
    //fromid:this.trip.fromid,
    //start_time: this.trip.start_time,
    //end_time: this.trip.end_time,
   // name: this.trip.name,
    //})
  }

  modifyTrip(trip: Trip): void{
    this.router.navigate(['/modify/' + trip.id], {state: {data: trip}});
  }

  //modifyTrip(trip: Trip): void{
  //  this.router.navigate(['edit/modifyTrip/' + trip.key], {state: {data: trip}});
 //}

}
