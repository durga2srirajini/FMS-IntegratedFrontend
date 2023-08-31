import { Component } from '@angular/core';
import { Booking } from 'src/app/models/booking_models/booking';
import { Passenger } from 'src/app/models/booking_models/passenger';
import { BookingService } from 'src/app/services/booking/booking.service';
@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})

export class UpdateBookingComponent {

 bookings:Booking=new Booking;
 passenger1:Passenger=new Passenger();
 passenger2:Passenger=new Passenger();
 passenger3:Passenger=new Passenger();
 passenger4:Passenger=new Passenger();

 booking2:Booking=new Booking;
 pass1:Passenger=new Passenger();
 pass2:Passenger=new Passenger();
 pass3:Passenger=new Passenger();
 pass4:Passenger=new Passenger();

  addMsg: string = "";
  errorMsg: string = "";
  availableTimeSlots: string[] = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  constructor(private bookingService: BookingService) { }

ngOnInit(){

  const i = sessionStorage.getItem('bUpdate');
  if (i !== null) {
  this.bookings=JSON.parse(i);
  // dont add logics here- No errors here
  this.passenger1=this.bookings.passengerList[0];
  this.passenger2=this.bookings.passengerList[1];
  this.passenger3=this.bookings.passengerList[2];
  this.passenger4=this.bookings.passengerList[3];
  }

  console.log(this.bookings);

 
 }


  updateBooking1() {
    // Booking booking = JSON.parse(sessionStorage.getItem('bUpdate'));
  

    console.log(this.bookings);

    
   
    this.bookingService.updateBooking(this.bookings)
    .subscribe(
      {
        next: (data) => {
          this.addMsg = "Booking updated successfully!";
          this.errorMsg = "";
          
        },
        error: (err) => {
          this.errorMsg = err.error.error;
          this.addMsg = "";
          console.log(err)
        }
      });
  }

}
