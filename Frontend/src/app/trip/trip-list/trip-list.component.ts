import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip/trip.service';
import { Trip } from 'src/app/model/trip/trip';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trip:any;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit()  {
   
    let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/trip");
    response.subscribe((data)=>this.trip=data);
}

updatetriprecord(){
 this.router.navigate(['/updatetrip/',2]);
}
}
