import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { airport } from 'src/app/models/airport';
 

@Injectable({
  providedIn: 'root'
})

export class AirportServiceService {

  constructor( private http : HttpClient) { }

  public  addAirport(newAirport:airport): Observable<any>{
    return this.http.post("http://localhost:8094/api/airports/airports", newAirport,{ responseType: "json" });
   }

  public  getAirportById(id : number): Observable<any>{
    return this.http.get("http://localhost:8094/api/airports/airport/{id}?id=" + id, { responseType: "json" });
   }

  public getAllAirports(): Observable<any> {
    return this.http.get("http://localhost:8094/api/airports/airports", {responseType: "json" });
  }

  public getAirportByName(airportName : string) : Observable<any> {
  return this.http.get("http://localhost:8094/api/airports/airports/{name}?name=" + airportName, {responseType: "json" });
  }

  public getSourceAirportSchedules(airportName : string) : Observable<any> {
    return this.http.get("http://localhost:8094/api/airports/airports/schedules/{name}?airportName="+ airportName, {responseType: "json" });
  }

  public  removeAirportById(id : number): Observable<any>{
    return this.http.delete("http://localhost:8094/api/airports/airports/{id}?id=" + id, { responseType: "json" });
  }

  public updateAirportDetails(updateAirport : airport) : Observable<any> {
    return this.http.get("http://localhost:8094/api/airports/update/8"+ updateAirport, {responseType: "json" });
  } 

} 
