import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/model/trip/trip';
import{Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TripService {
  trips: Trip | undefined;
   
  baseURL= "http://localhost:"+environment.SERVER_PORT+"/app/trip";  //get url from backend
  constructor(private httpClient:HttpClient,private router:Router) { }
id ?: number;
  //get all trips
  //URL=
  getAllTrips():Observable<Trip[]>
  {return this.httpClient.get<Trip[]>(`${this.baseURL}`)}

  //add new trip
  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseURL, data);
  }
  
getcurrenttrip(id:number){
  return this.httpClient.get(`${this.baseURL}/searchbyId/${id}`)
}
deletetrip(id:number) {
  return this.httpClient.delete('http://localhost:'+environment.SERVER_PORT+'/app/trip/deletebyId/'+id);
}


gettrip(id:number) {
  return this.httpClient.get('http://localhost:'+environment.SERVER_PORT+'/app/trip/searchbyId/' + id);
}
//update trip
updatetrip(id:number,updatedbody: Trip) {
  const endpoint='http://localhost:'+environment.SERVER_PORT+'/app/admin/updatebyid/'+id;
  return this.httpClient.put(endpoint ,updatedbody);
}
 

}

