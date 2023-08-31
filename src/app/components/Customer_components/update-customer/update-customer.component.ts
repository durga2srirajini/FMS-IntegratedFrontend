import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/booking_models/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  customer: Customer = new Customer();
  isEditable: boolean = false
  msg: String = "";
  errorMsg: String = "";
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    var i = localStorage.getItem('id');
    const id: number = +i!;
    this.customerService.getCustomerById(id).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
      }
    )
  }

  editClick() {
    this.isEditable = !this.isEditable;
  }

  editCustomerProfile() {
    var i = localStorage.getItem('id');
    const id: number = +i!;
    this.customerService.updateCustomer(this.customer, id).subscribe({
      next: (data) => {
        this.customer = data; 
        console.log(data);
        Swal.fire(
          {
            text:"You have Successfully Updated your Profile",
            icon:"success",
            showConfirmButton:true,
            timer:1000*5
          }).then(()=>{window.location.reload()})
        this.msg = "You have Successfully Updated your Profile...";
        this.errorMsg = ""
      },
      error: (err: any) => {
        console.log(err);
        Swal.fire(
          {
            text:"Given user email already existed",
            icon:"warning",
            showConfirmButton:true,
            timer:1000*5
          }).then(()=>{window.location.reload()})
        this.errorMsg ="Date must be past date";
        this.msg = "";
      }
    });
  }
}
