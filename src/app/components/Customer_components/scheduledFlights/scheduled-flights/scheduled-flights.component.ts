import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { ScheduleFlight } from 'src/app/models/ScheduleFlight';
import { FlightService } from 'src/app/services/flight/flight.service';
import { FlightSchedulesService } from 'src/app/services/flightSchedules/flight-schedules.service';

@Component({
  selector: 'app-scheduled-flights',
  templateUrl: './scheduled-flights.component.html',
  styleUrls: ['./scheduled-flights.component.css']
})
export class ScheduledFlightsComponent implements OnInit {

  constructor(private scheduleFlightService: FlightSchedulesService, private flightService:FlightService,private router: Router) { }
  errorMsg: String = "";
  msg: String = "";
  pageTitle = "SCHEDULE A FLIGHT"
  schedules: ScheduleFlight[] = [];
  flights: Flight[] = [];



  ngOnInit() {

    this.scheduleFlightService.getSchedules()
      .subscribe({
        next: (data) => {
          this.schedules = data;
          console.log(this.schedules);
          this.fetchFlights();
          this.filterSchedulesForTodayAndFuture();
        },
        error: (error) => { console.log(error); }
      });
  }

  addBooking(sheduleId: number) {
    localStorage.setItem('scheduleId', sheduleId.toString());
    this.router.navigate(['/newBooking']);
  }

  fetchFlights() {
    this.flightService.getAllFlights()
      .subscribe({
        next: (flights:Flight[]) => {
          this.flights = flights;
          this.matchCarrierNames(); // Associate carrier names with schedules
        },
        error: (error:any) => { console.log(error); }
      });
  }

  matchCarrierNames() {
    this.schedules.forEach(schedule => {
      const matchingFlight = this.flights.find(flight => flight.flightNumber === schedule.flightId);
      if (matchingFlight) {
        schedule.carrierName = matchingFlight.carrierName;
      }
    });
  }
  
  filterSchedulesForTodayAndFuture() {
    const now = new Date();
    this.schedules = this.schedules.filter(schedule => {
      const departureTime = new Date(schedule.departureTime);
      return departureTime >= now;
    });
  }
  
  
  

}
