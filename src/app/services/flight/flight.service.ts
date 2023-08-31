import { Injectable } from '@angular/core';


import { HttpClient} from '@angular/common/http';

import { Flight } from 'src/app/models/flight';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private httpClient:HttpClient) { }

  addFlight(flight:Flight):Observable<any>{

    return this.httpClient.post("http://localhost:8092/api/flight/flights/",flight,{responseType:"json"});
  }

  getAllFlights():Observable<any>{

    console.log("Get allFlights");

    return this.httpClient.get("http://localhost:8092/api/flight/flights",{responseType:"json"});

  }

  deleteFlightById(id : any) : Observable<any>{

    console.log("Delete flight at Id {}", id);

    return this.httpClient.delete("http://localhost:8092/api/flight/flights/"+id,{responseType:"json"});

  }

  updateFlight(flight:Flight) : Observable<any>{

    return this.httpClient.put("http://localhost:8092/api/flight/flights/" + flight.flightNumber,flight,{responseType:"json"});

  }

 

  getSchedulesByFlightId(id : any) : Observable<any>{

    return this.httpClient.get("http://localhost:8092/api/flight/flights/schedules/" + id, {responseType:"json"});

  }

}
