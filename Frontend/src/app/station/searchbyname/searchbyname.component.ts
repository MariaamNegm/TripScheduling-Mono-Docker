import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station/station.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-searchbyname',
  templateUrl: './searchbyname.component.html',
  styleUrls: ['./searchbyname.component.css']
})
export class SearchbynameComponent implements OnInit {
  station:any;
  name : string ='';
  res : string ='';
  constructor(private http:HttpClient , private stationservice:StationService) { }
  ngOnInit()  {
   let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/station");
    response.subscribe((data)=>this.station=data);
}
  search(){
      this.station=this.station.filter( (res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
  }

}
