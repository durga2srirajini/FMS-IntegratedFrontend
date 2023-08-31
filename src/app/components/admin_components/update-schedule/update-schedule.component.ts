import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';

import { ScheduleFlightService } from 'src/app/services/scheduleFlight/schedule-flight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit{
  msg:String="";
  errorMsg:String="";
  schedules: ScheduleFlight[] = [];
  scheduleFlight:ScheduleFlight = new ScheduleFlight();
  constructor(private scheduleFlightService:ScheduleFlightService, private router:Router){}

  ngOnInit(): void {
    const i = sessionStorage.getItem('scheduleData');
    if (i !== null) {
      this.scheduleFlight=JSON.parse(i);
    }
  }

  cancel(){
    this.router.navigateByUrl('/getSchedule');
  }

  uploadData(){
    Swal.fire({
      title: 'Are you sure??',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((res)=>{
      if(res.isConfirmed) {
        this.scheduleFlightService.updateSchedule(this.scheduleFlight)
        .subscribe({
          next: (data) => {
            this.msg = "Updated successfully!";
            this.errorMsg = "";
            this.errorMsg = data
            console.log(data);
          },
          error: (err) => {
            this.errorMsg = JSON.stringify(err.error);
            this.msg = "";
            console.log(err)
          }
        });
        this.router.navigateByUrl('/getSchedule');
      }
      else if (res.isDenied || res.isDismissed) {
        Swal.fire("Not Updates")
      }
    })
  }
}
