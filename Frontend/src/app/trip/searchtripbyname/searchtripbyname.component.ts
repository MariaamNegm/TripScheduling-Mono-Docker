import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip/trip.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-searchtripbyname',
  templateUrl: './searchtripbyname.component.html',
  styleUrls: ['./searchtripbyname.component.css']
})
export class SearchtripbynameComponent implements OnInit {
  trip:any;
  name : string ='';
  res : string ='';
  constructor(private http:HttpClient , private tripservice:TripService) { }
  ngOnInit()  {
   let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/trip");
    response.subscribe((data)=>this.trip=data);
}
  search(){
      this.trip=this.trip.filter( (res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
  }

}







