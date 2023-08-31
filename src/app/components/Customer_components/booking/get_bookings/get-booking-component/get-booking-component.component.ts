import { Booking } from 'src/app/models/booking_models/booking';

import { BookingService } from 'src/app/services/booking/booking.service';

import { MatDialog } from '@angular/material/dialog';

import { Passenger } from 'src/app/models/booking_models/passenger';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { ScheduleFlight } from 'src/app/models/ScheduleFlight';

import { Component, ElementRef, ViewChild } from '@angular/core';

import html2canvas from 'html2canvas';

import { FlightSchedulesService } from 'src/app/services/flightSchedules/flight-schedules.service';
@Component({
  selector: 'app-get-booking-component',
  templateUrl: './get-booking-component.component.html',
  styleUrls: ['./get-booking-component.component.css']
})
export class GetBookingComponentComponent {

query: string = "";

  bookings: Booking[]=[];

  passegers:Passenger[]=[];

  msg: String = "";

  errorMsg: String = "";

  schedules:ScheduleFlight[]=[];

 

  bookingss:Booking=new Booking;

 

  passenger1:Passenger=new Passenger();

  passenger2:Passenger=new Passenger();

  passenger3:Passenger=new Passenger();

  passenger4:Passenger=new Passenger();

 

   addMsg2: string = "";

   errorMsg2: string = "";

   addMsg3: string = "";

   errorMsg3: string = "";

 

  constructor(private bookingService:BookingService,private scheduleFlightService: FlightSchedulesService, private dialog: MatDialog, private router: Router) { }

 

  ngOnInit() {

    this.bookingService.getAllConfirmedBookings()

      .subscribe(

        {

          next: (data) => {

            console.log(data);

            this.bookings = data;

            this.msg = "Fetched all bookings, Success!";

            this.errorMsg = "";

          },

          error: (error) => {

            console.log(error);

            this.errorMsg = "Could not fetch all bookings, please try after some time.";

            this.msg = "";

          }

        });

 

 

        this.scheduleFlightService.getSchedules()

        .subscribe({

          next: (data) => {

            this.schedules = data;

            // console.log()

            console.log(this.schedules);

          },

          error: (error) => { console.log(error); }

        });

  }

 

  getFlightDetails(scheduleId:number){

    return this.schedules.filter((flight)=>flight.scheduleId===scheduleId);

  }

 

  updateBooking(booking:Booking) {

    console.log(booking);

    sessionStorage.setItem('bUpdate', JSON.stringify(booking));

  //  Passenger obj = JSON.parse(sessionStorage.getItem('bUpdate'))

    this.router.navigate(['/updateBooking']);

  }

 

  cancelBooking1(bookingId:number){

    console.log(bookingId);

    Swal.fire({

      title: 'Do you want to cancel whole booking?',

      showCancelButton: true,

      confirmButtonText: 'Yes',

      denyButtonText: 'No',

    }).then((res) => {

      if (res.isConfirmed) {

        this.bookingService.cancelBooking(bookingId).subscribe({

 

          next: (data) => {

            this.addMsg3 = "Booking cancelled successfully!";

            this.errorMsg3 = "";

            window.location.reload();

          },

          error: (err) => {

            this.errorMsg3 = JSON.stringify(err.error);

            this.addMsg3 = "";

            console.log(err)

          }

        });

        } else if (res.isDenied || res.isDismissed) {

          Swal.fire("Ticket not cancelled")

        }

      }

      )

    }

 

       

  removePassenger1(passengerId:number, booking:Booking){

    console.log(booking);

    console.log(passengerId);

    let price=3000;

 

    Swal.fire({

      title: 'Do you want to cancel ticket?',

      showCancelButton: true,

      confirmButtonText: 'Yes',

      denyButtonText: 'No',

    }).then((res) => {

      if (res.isConfirmed) {

       

        this.bookingService.removePassenger(passengerId,booking,price)

    .subscribe(

      {

        next: (data) => {

          this.addMsg2 = "Ticket cancelled successfully!";

          this.errorMsg2 = "";

          window.location.reload();

        },

        error: (err) => {

          this.errorMsg2 = JSON.stringify(err.error);

          this.addMsg2 = "";

          console.log(err)

        }

      });

      } else if (res.isDenied || res.isDismissed) {

        Swal.fire("Ticket not cancelled")

      }

    }

    )

  }

 

 

  @ViewChild('formattedText') formattedText!: ElementRef;

 

  generateImage() {

    html2canvas(this.formattedText.nativeElement).then(canvas => {

      const link = document.createElement('a');

      link.href = canvas.toDataURL('image/png');

      link.download = 'formatted-text.png';

      link.click();

    });

  }

 

  }



