import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/model/station/station';
import { StationService } from 'src/app/services/station/station.service';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

station: Station = {
  Name: '',
};
submitted = false;

constructor(private stationservice:StationService) { }

ngOnInit(): void {
}

savestation(): void {
  const data = {
    name: this.station.Name,
  };

  this.stationservice.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

newstation(): void {
  this.submitted = false;
  this.station = {
    Name: '',
  };
}
}
