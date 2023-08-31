import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';

@Injectable({
  providedIn: 'root'
})
export class ScheduleFlightService {

  constructor(private httpClient:HttpClient) { }

  getSchedules():Observable<any>{
    return this.httpClient.get("http://localhost:8093/api/scheduleFlight/schedules",{responseType:"json"});
  }

  deleteSchedule(scheduleId:number):Observable<any>{
    console.log("Deleted");
    return this.httpClient.delete("http://localhost:8093/api/scheduleFlight/deleteSchedule/"+scheduleId, {responseType: "json" });
  }

  addSchedule(id1:number, schedule:ScheduleFlight):Observable<any>{
    console.log(schedule);
    return this.httpClient.post("http://localhost:8093/api/scheduleFlight/scheduleFlight/"+id1, schedule, {responseType:"json"});
  }

  updateSchedule(schedule:ScheduleFlight):Observable<any>{
    return this.httpClient.put("http://localhost:8093/api/scheduleFlight/modifySchedule/"+schedule.scheduleId, schedule, {responseType:"json"});
  }
  
  getSchedulesByFlightId(id1:number):Observable<any>{
    console.log(id1);
    return this.httpClient.get("http://localhost:8093/api/scheduleFlight/flightSchedule/"+id1,{responseType:"json"});
  }
}
