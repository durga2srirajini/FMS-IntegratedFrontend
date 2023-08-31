import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { airport } from 'src/app/models/airport';
import { AirportServiceService } from 'src/app/services/airport/airport.service';

@Component({
  selector: 'app-view-airports',
  templateUrl: './view-airports.component.html',
  styleUrls: ['./view-airports.component.css']
})

export class ViewAirportsComponent {
  airportList: airport[] = [];
  selectedAirport = {
    airportName: '',
    airportLocation: '',
    airportId: '',

  };
  newAirport: airport = new airport;
  formHeading = "New Airport";
  showAirportUpdateForm = false;
  msg: String = "";
  errorMsg: String = "";

  constructor(private airportService: AirportServiceService, private router: Router) { }
  ngOnInit() {
    this.airportService.getAllAirports().subscribe({
      next: (data) => {
        console.log("Successfully updated airport details");
        this.msg = "Successfully updated";
        this.errorMsg = "";
        this.airportList = data;
        console.log(this.airportList);
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
      this.airportService.removeAirportById(id).subscribe({
        next: (data) => {
          console.log("Successfully updated airport details");
          this.msg = "Successfully updated";
          this.errorMsg = "";
        },

        error: () => {
          console.log("error");
          this.errorMsg = "Could Not update airport details";
          this.msg = "";
        }
      });
    window.location.reload();
  }




  closeForm() {
    this.showAirportUpdateForm = false;
    window.location.reload();
  }

  newAirportForm(item: any) {
    this.showAirportUpdateForm = true;
    this.selectedAirport = item;
    console.log("update Airport");
    this.airportService.updateAirportDetails(item).subscribe({
      next: (data) => {
        console.log("opened");
      },
      error: () => {
        console.log("error");
      }
    })
  }

  saveupdateAirport(selectedAirport: any) {
    console.log("Submit Clicked");
    console.log(this.newAirport);
    this.airportService.updateAirportDetails(selectedAirport)
      .subscribe({
        next: (data) => {
          console.log("Flight Added Successfully");
          this.msg = "Flight Added Successfully";
          this.errorMsg = "";
          this.newAirport = data;
        },
        error: (err) => {
          this.errorMsg = JSON.stringify(err.error);
          this.msg = "";
          console.log(err);
        }
      })
    this.showAirportUpdateForm = false;
    window.location.reload();
  }
}


