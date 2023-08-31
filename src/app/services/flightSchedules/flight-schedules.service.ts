import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSchedulesService {

  
  constructor(private httpClient : HttpClient) { }
  getSchedules():Observable<any>{

    return this.httpClient.get("http://localhost:8093/api/scheduleFlight/schedules",{responseType:"json"});

  }
}
