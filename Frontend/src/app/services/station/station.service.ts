import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Station} from 'src/app/model/station/station';
import{Observable} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
 
 
@Injectable({
  providedIn: 'root'
})
export class StationService {
  
  baseURL= "http://localhost:"+environment.SERVER_PORT+"/app/station";  //get url from backend
  baseUrl = 'http://localhost:'+environment.SERVER_PORT+'/app/station';

  constructor(private httpClient:HttpClient,private router:Router) { }

  //get all stations
  //URL=
  getAllStations():Observable<Station[]>
  {return this.httpClient.get<Station[]>(this.baseUrl);}
 // {return this.httpClient.get<Station[]>(`${this.baseURL}`)}

  //add new station
  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }
  //stationgetbyid(id:any)
   //{
  //  return this.httpClient.get('http://localhost:8080/app/station/searchbyId/'+id);
   //}
  //remove station
  public removestation(id: string){
    this.httpClient.delete('http://localhost:'+environment.SERVER_PORT+'/app/station/deletebyId/'+id).subscribe(res=>{
      console.log(res);
    })
}
//try this 
  delete(id:any){
  return this.httpClient.delete('http://localhost:'+environment.SERVER_PORT+'/app/station/deletebyId/'+id);
}
//get(id: any): Observable<Station> {
  //return this.httpClient.get('http://localhost:8080/app/station/searchbyId/'+id);
//}
//findByName(Name: any): Observable<Station[]> {
  //return this.httpClient.get<Station[]>('http://localhost:8080/app/station/searchbyname/'+Name);
//}

deleteStation(id:number) {
  return this.httpClient.delete('http://localhost:'+environment.SERVER_PORT+'/app/station/deletebyId/' + id);
}
}
