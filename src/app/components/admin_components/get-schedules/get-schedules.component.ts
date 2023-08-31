import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';
import { ScheduleFlightService } from 'src/app/services/scheduleFlight/schedule-flight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-schedules',
  templateUrl: './get-schedules.component.html',
  styleUrls: ['./get-schedules.component.css']
})
export class GetSchedulesComponent {
  constructor(private scheduleFlightService:ScheduleFlightService, private router:Router){}
  errorMsg:String="";
  id1:number = 0;
  msg:String="";
  pageTitle = "SCHEDULE A FLIGHT" 

  schedules: ScheduleFlight[] = [];
  scheduleFlight:ScheduleFlight = new ScheduleFlight();

  openAddScheduleForm(){
    this.router.navigateByUrl('/addSchedule');
  }

  modifySchedule(schedule:any){
    sessionStorage.setItem('scheduleData', JSON.stringify(schedule));
    console.log(schedule);
    this.router.navigateByUrl('/updateSchedule');
  }

  ngOnInit()  {
    
    let id = localStorage.getItem('flightId');
    if(id){
      const fid =+ id!;
      this.id1=fid;
      this.scheduleFlightService.getSchedulesByFlightId(fid)
      .subscribe({
        next:(data) => { 
          console.log(fid)
          this.schedules=data
          console.log(this.schedules)
        },
        error:(error)=> {console.log(error)}
      });
    }
    else {
      console.log("No Schedules Found");
    }
  }
  
  cancelSchedule(scheduleId:number){
    console.log(scheduleId);
    Swal.fire({
      title: 'Do you want to cancel the Schedule?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((res)=>{
      if(res.isConfirmed) {
        this.scheduleFlightService.deleteSchedule(scheduleId).subscribe({

          next: (data) => {
            this.msg = "Schedule cancelled successfully!";
            this.errorMsg= "";
            window.location.reload();
          },
          error: (err) => {
            this.errorMsg = JSON.stringify(err.error);
            this.msg = "";
            console.log(err)
          }
        });
      }
      else if (res.isDenied || res.isDismissed) {
        Swal.fire("Schedule not cancelled")
      }
    })
  }
}
