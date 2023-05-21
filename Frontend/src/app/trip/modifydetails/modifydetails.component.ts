import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip/trip';
import { TripService } from 'src/app/services/trip/trip.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifydetails',
  templateUrl: './modifydetails.component.html',
  styleUrls: ['./modifydetails.component.css']
})

export class ModifydetailsComponent implements OnInit {

  id!:number;
  submitted=false;
  constructor(private http:HttpClient,private router:ActivatedRoute,private tripservice:TripService ) { }
  
  trip= new Trip();
  ngOnInit(): void{
    this.router.snapshot.params['id']
    this.router.paramMap.subscribe(
      params=>this.id=this.router.snapshot.params['id'])

      this.loaddata();
     
  }
   
   
   loaddata()
   {
    this.tripservice.gettrip(this.id).subscribe(
      data=>this.trip=data,
      )

   }
   handleSubmit(f:NgForm)
   {
         this.tripservice.updatetrip(this.id,f.value).subscribe(
          
         )
   }
}
