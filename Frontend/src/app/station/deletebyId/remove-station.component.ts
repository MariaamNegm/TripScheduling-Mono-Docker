import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station/station.service';

@Component({
  selector: 'app-remove-station',
  templateUrl: './remove-station.component.html',
  styleUrls: ['./remove-station.component.css']
})
export class RemoveStationComponent implements OnInit {
  
  id!: number;
  
  constructor(private stationservice:StationService) {
    
  }
  ngOnInit(){
      
  }


  deleteStationbyid(id:number){
    this.stationservice.deleteStation(id).subscribe();
  }
 
}
