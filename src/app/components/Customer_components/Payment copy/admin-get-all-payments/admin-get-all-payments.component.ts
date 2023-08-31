import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDTO } from 'src/app/models/payment_models/payment-dto';
import { BookingService } from 'src/app/services/booking1/booking.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-get-all-payments',
  templateUrl: './admin-get-all-payments.component.html',
  styleUrls: ['./admin-get-all-payments.component.css']
})

export class AdminGetAllPaymentsComponent implements OnInit {
payments:PaymentDTO[]=[];
payment:PaymentDTO=new PaymentDTO;
query:string="";

constructor(private paymentService:PaymentService,private bookingService: BookingService, private router:Router){}
  ngOnInit(){
    this.fetchAllPayments()
  }
  fetchAllPayments(){
    this.paymentService.getAllPayments().subscribe({
      next:(data)=>{this.payments=data;console.log(data)} 
    })
  }
  
  refundPayment(id: number): void{
    
    this.bookingService.getBookingById(id).subscribe(booking => {
      if (booking && booking.bookingStatus === 'CANCELLED') {
        this.paymentService.refundPayment(id).subscribe(
          () => {
            Swal.fire({
              title: 'Refund Successful',
              text: 'Payment has been refunded successfully.',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              window.location.reload();
            });
            },
            error => {
              console.error('Error refunding payment:', error);
              Swal.fire({
                title: 'Refund Error',
                text: 'An error occurred while refunding the payment.',
                icon: 'error',
                showConfirmButton: true
              });
            }
          );
        } else {
          Swal.fire({
            title:'Refund Error',
            text: 'Refund can only be processed for a canceled booking.',
            icon: 'error',
            showConfirmButton: true
          });
        }
      });
   

}
}