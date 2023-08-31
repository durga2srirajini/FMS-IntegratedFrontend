import { Component } from '@angular/core';
import { Booking } from 'src/app/models/booking_models/booking';
import { Passenger } from 'src/app/models/booking_models/passenger';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';
@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css'],

})
export class NewBookingComponent {
  bookings:Booking=new Booking;
  schedules:ScheduleFlight[]=[];
 
id1:number=0;
 passenger1:Passenger=new Passenger();
 passenger2:Passenger=new Passenger();
 passenger3:Passenger=new Passenger();
 passenger4:Passenger=new Passenger();

  addMsg: string = "";
  errorMsg: string = "";
  constructor(private bookingService: BookingService,private router: Router) { }
  ngOnInit(){
    let id=localStorage.getItem('scheduleId');
 if(id!==null || id!==undefined){
  const s: number = +id!;
  this.id1=s;
  console.log(s);
  this.bookings.sheduleId=this.id1;
 }
    // this.bookings.sheduleId=this.schedules.scheduleId 
  }








  addBooking() {
    // var i = localStorage.getItem('id');
    // const id: number = +i!;
    // var j = sessionStorage.getItem('bShedul');

    // if (j !== null && j!==undefined) {
    //   this.schedules=JSON.parse(j);
    //   const id: number=this.schedules.shed
    //   console.log(this.schedules);
    // }
   
    // console.log(this.schedules);
    


    if(Object.keys(this.passenger1).length!==0){
    this.bookings.passengerList.push(this.passenger1);
    }
    if(Object.keys(this.passenger2).length!==0){
    this.bookings.passengerList.push(this.passenger2);
    }
    if(Object.keys(this.passenger3).length!==0){
    this.bookings.passengerList.push(this.passenger3);
    }
    if(Object.keys(this.passenger4).length!==0){
    this.bookings.passengerList.push(this.passenger4);
    }
    console.log(this.bookings);

    var i = localStorage.getItem('id');
    const id: number = +i!;
    this.bookings.userId=id;
    this.bookingService.addBooking(this.bookings)
    .subscribe(
      {
        next: (data) => {
          this.addMsg = "Booked successfully!";
          this.errorMsg = "";
          this.bookings = data
          console.log(this.bookings);
          sessionStorage.setItem('bPayment', JSON.stringify(this.bookings));
          //  Passenger obj = JSON.parse(sessionStorage.getItem('bUpdate'))
          this.router.navigate(['/makePayment']);
        },
        error: (err) => {
          this.errorMsg = JSON.stringify(err.error);
          this.addMsg = "";
          console.log(err)
        }
      });
    }

    addPayment1(){
      console.log(this.bookings);
      sessionStorage.setItem('bPayment', JSON.stringify(this.bookings.bookingId));
    //  Passenger obj = JSON.parse(sessionStorage.getItem('bUpdate'))
      this.router.navigate(['/makePayment']);
    }
}
