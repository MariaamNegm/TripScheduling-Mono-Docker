import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip/trip.service';
import { Trip } from 'src/app/model/trip/trip';


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
 trip:Trip  = {
  fromid:0,
  toid:0,
  start_time: '',
  end_time: '',
  name:'',
};

submitted = false;

constructor(private tripservice:TripService) { }
trip2:Trip  = {
  fromid:0,
  toid:0,
  start_time: '',
  end_time: '',
  name:'',
};

ngOnInit(): void {
}

savetrip(): void {
  const data = {
    toid:this.trip.toid,
    fromid:this.trip.fromid,
    start_time: this.trip.start_time,
    end_time: this.trip.end_time,
    name: this.trip.name,
  };

  this.tripservice.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

newtrip(): void {
  this.submitted = false;
  this.trip = {
    fromid:0,
    toid:0,
    start_time: '',
    end_time: '',
   name:''
  };
}

}



