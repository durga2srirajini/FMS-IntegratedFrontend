import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDTO } from 'src/app/models/booking/booking-dto';
import { PaymentDTO } from 'src/app/models/payment_models/payment-dto';
import { BookingService } from 'src/app/services/booking1/booking.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-payment',
  templateUrl: './get-payment.component.html',
  styleUrls: ['./get-payment.component.css']
})
export class GetPaymentComponent implements OnInit {
  payment: PaymentDTO = new PaymentDTO();
  id1:number=0;
  msg = "";
  errorMsg = "";

  constructor(private bookingService: BookingService, private paymentService: PaymentService,private router: Router) { }
  ngOnInit() {
    this.getPaymentById();
  }

  getPaymentById(){
    let id = localStorage.getItem('bid');
    if(id){
      const bid =+ id!;
      this.id1=bid;
    this.paymentService.getPaymentByBookingId(bid).subscribe(
      {
        next: (data) => { 
          this.payment = data; console.log(this.payment); 
          Swal.fire( {
            title: 'Success',
            text:'Payment Details fetched Successfully',
            icon:'success',
            showConfirmButton:true,
            timer:1000
          }).then(()=>{this.router.navigate(['/get-payment'])}) 
            this.msg = "Payment Details fetched Successfully!"
            this.errorMsg = ""},
          error: (err) => { console.error('payment not found',err);
            Swal.fire({
            title: 'failure',
            text: 'payment not found!',
            icon: 'error',
            showConfirmButton: true
          });
          this.msg = ""}
      }
    );
  }
}
}
