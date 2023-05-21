import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip/trip.service';

@Component({
  selector: 'app-remove-trip',
  templateUrl: './remove-trip.component.html',
  styleUrls: ['./remove-trip.component.css']
})
export class RemoveTripComponent implements OnInit {


  id!: number;
  
  constructor(private tripservice:TripService) {
    
  }
  ngOnInit(){
      
  }

  deletetripbyid(id:number){
    this.tripservice.deletetrip(id).subscribe();
  }
}
