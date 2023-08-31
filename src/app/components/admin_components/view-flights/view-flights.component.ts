import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight/flight.service';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})

export class ViewFlightsComponent {

  flightList: Flight[] = [];
  selectedFlight = {
    flightNumber: '',
    carrierName: '',
    flightModel: '',
    seatCapacity: '',
    flightStatus: "NOT_SCHEDULED",
  }

  msg: String = "";
  errorMsg: String = "";
  len: Number = 0;
  flight: Flight = new Flight;

  formHeader = "New Flight";
  showForm = false;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {
    this.flightService.getAllFlights().subscribe({
      next: (data) => {
        console.log("Successfully updated airport details");
        this.msg = "Successfully updated";
        this.errorMsg = "";
        this.flightList = data;
        console.log(this.flightList);
      },
      error: () => {
        console.log("error");
        this.errorMsg = "Could Not update airport details";
        this.msg = "";
      }
    });
  }

  onDelete(id: any) {
    if (confirm("The airport will be deleted forever!!"))
      this.flightService.deleteFlightById(id).subscribe({
        next: (data) => {
          this.msg = "Successfully updated";
          this.errorMsg = "";
        },
        error: () => {
          console.log("error");
          this.errorMsg = " ";
          this.msg = "";
        }
      });
    window.location.reload();
  }

  newForm(item: any) {
    this.showForm = true;
    this.selectedFlight = item;
    console.log("Updated a Flight");
    this.flightService.updateFlight(item).subscribe({
      next: (data) => {
        console.log("opened");
      },
      error: () => {
        console.log("error");
      }
    })
  }

  closeForm() {
    this.showForm = false;
    window.location.reload();
  }

  saveUpdateFlight(selectedFlight: any) {
    console.log("Submit Clicked");
    console.log(this.flight);
    this.flightService.updateFlight(selectedFlight)
      .subscribe({
        next: (data) => {
          console.log("Flight Updated Successfully");
          this.msg = "Flight Upated Successfully";
          this.errorMsg = "";
          this.flight = data;
        },
        error: (err) => {
          this.errorMsg = JSON.stringify(err.error);
          this.msg = "";
          console.log(err);
        }
      })
    this.showForm = false;
    window.location.reload();
  }

  viewForm() {
    this.router.navigate(['/viewflights']);
  }

  scheduled(id: any) {
    this.flightService.getSchedulesByFlightId(id)
      .subscribe(data => {
        (this.len = data.length())
      });
  }

  onView(id: any) {
    localStorage.setItem('flightId', id.toString())
    this.router.navigate(["/getSchedule"]);
  }
}