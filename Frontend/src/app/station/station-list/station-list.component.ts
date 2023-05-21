import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Station} from 'src/app/model/station/station';
import { StationService } from 'src/app/services/station/station.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  station:any;

  
  constructor(private http:HttpClient) { }

  ngOnInit()  {
    let response= this.http.get("http://localhost:"+environment.SERVER_PORT+"/app/station");
    response.subscribe((data)=>this.station=data);
}

}
