import { Component } from '@angular/core';

import { Flight } from 'src/app/models/flight';

import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';

import { FlightService } from 'src/app/services/flight/flight.service';
import { airport } from 'src/app/models/airport';
import { AirportServiceService } from 'src/app/services/airport/airport.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  flight:Flight = new Flight;

  formHeader="New Flight";

  newAirport : airport = new airport;

  formHeading = "New Airport";

  showAirportForm = false;

  showForm = false;

  addMsg:String="";

  errorMsg:String="";

 

  constructor(private flightService:FlightService,private router:Router, private airportService:AirportServiceService){  }

 

  newForm(){

    this.showForm= true;

    console.log("Add New Flight");

  }

 

  closeForm(){

    this.showForm = false;

    window.location.reload();

  }

 

  saveFlight(){

    console.log("Submit Clicked");

    console.log(this.flight);

 

    this.flightService.addFlight(this.flight)

    .subscribe({

      next:(data)=>{

        console.log("Flight Added Successfully");

        this.addMsg="Flight Added Successfully";

        this.errorMsg="";

        this.flight=data;

      },

      error:(err)=>{

        this.errorMsg = JSON.stringify(err.error);

        this.addMsg="";

        console.log(err);

      }

    })

    this.showForm = false;

    window.location.reload();

  }

 

  viewForm(){

    this.router.navigate(['/viewflights']);

  }

  newAirportForm(){

    this.showAirportForm= true;

    console.log("Add New Airport");

  }

  saveAirport(){

    console.log("Submit Clicked");

    console.log(this.newAirport);

 

    this.airportService.addAirport(this.newAirport)

    .subscribe({

      next:(data)=>{

        console.log("Flight Added Successfully");

        this.addMsg="Flight Added Successfully";

        this.errorMsg="";

        this.flight=data;

      },

      error:(err)=>{

        this.errorMsg = JSON.stringify(err.error);

        this.addMsg="";

        console.log(err);

      }

    })

    this.showAirportForm = false;

    window.location.reload();

  }

  viewAllAirports() {
    this.router.navigate(['/viewAirports']);


}
}
