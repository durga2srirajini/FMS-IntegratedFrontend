import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';
import { ScheduleFlightService } from 'src/app/services/scheduleFlight/schedule-flight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit{
  id1:number = 0;
  msg:String="";
  errorMsg:String="";
  schedules: ScheduleFlight[] = [];
  scheduleFlight:ScheduleFlight = new ScheduleFlight();
  constructor(private scheduleFlightService:ScheduleFlightService, private router:Router){}
  
  ngOnInit(): void {
    let data:any = sessionStorage.getItem("scheduleFlight");
    if(data!=null){
      this.scheduleFlight = JSON.parse(data);
    }
    let id = localStorage.getItem('flightId');
    const iid:number =+id!
    this.id1 = iid;
  }

  cancel(){
    this.router.navigateByUrl('/getSchedule');
  }

  addSchedule(){
    Swal.fire({
      title: 'Are you sure??',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((res)=>{
      if(res.isConfirmed) {
        this.scheduleFlightService.addSchedule(this.id1, this.scheduleFlight)
        .subscribe({
          next: (data) => {
            this.msg = "Scheduled successfully!";
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
        Swal.fire("Not Scheduled")
      }
    })
  }
}
