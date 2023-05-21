import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/model/station/station';
import { StationService } from 'src/app/services/station/station.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
}) 
export class SearchbyidComponent implements OnInit {
  station:any;
  name : string ='';
  res : string ='';
  id!: number;
  str = String(this.id);
  constructor(private http:HttpClient , private stationservice:StationService) { }
  ngOnInit()  {
   let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/station");
    response.subscribe((data)=>this.station=data);
}
  search(){
      this.station=this.station.filter( (res: { str: string; })=>{
        return res.str.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
  }
}
