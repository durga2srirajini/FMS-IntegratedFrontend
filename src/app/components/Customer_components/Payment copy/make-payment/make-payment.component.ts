
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDTO } from 'src/app/models/booking/booking-dto';
import { CardPayment } from 'src/app/models/payment_models/card-payment';
import { Payment } from 'src/app/models/payment_models/payment';
import { UPIPayment } from 'src/app/models/payment_models/upipayment';
import { BookingService } from 'src/app/services/booking1/booking.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit{
  payment: Payment = new Payment();
  bookingDTO : BookingDTO = new BookingDTO();
  selectedPaymentType: string = "SELECT";
  card: CardPayment = new CardPayment();
  upi: UPIPayment= new UPIPayment();
  status: Payment["status"] = "PENDING";
  msg: String = "";
  errorMsg: String = "";
  contactRef:any;
  pinRef:any;
  cvvRef:any;
  nameRef:any;
  cardNoRef:any;

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private paymentService: PaymentService,private router: Router) { }
  ngOnInit() {
    this.getBookingById();
  }
  getBookingById() {
    var i = sessionStorage.getItem('bPayment');
    if (i !== null && i!==undefined) {
      this.bookingDTO=JSON.parse(i);
      console.log(this.bookingDTO);
    }
    const bookingId: number = this.bookingDTO.bookingId;
    this.bookingService.getBookingById(bookingId).subscribe(
      {
        next: (data) => { this.bookingDTO = data; console.log(data) 
          this.msg = "booking details fetched"
          this.errorMsg = ""},
        error: (err) => { console.log(err) 
          this.errorMsg = JSON.stringify(err.error)
          this.msg = ""}

      }
    )
  }

  makePayment(){
    const paymentData = {
      type: this.selectedPaymentType,
      card: this.selectedPaymentType === 'CARD' ? { cardNumber: this.card } : null,
      upi: this.selectedPaymentType === 'UPI' ? { upi: this.upi } : null
  };
  var i = this.bookingDTO['bookingId'];
  const bid: number = +i!;
  if(this.selectedPaymentType=='CARD' as string){
    this.paymentService.makeCardPaymentForBooking(this.card,bid).subscribe(
      {
        next: (data) => { 
          this.payment = data; 
          console.log(this.payment); 
          Swal.fire( {
            title: 'PaymentSuccessful',
            text:'Payment Done Successfully',
            icon:'success',
            showConfirmButton:true,
            timer:2000
          }).then(()=>{
            console.log(bid) ;
            this.bookingService.setBookingStatus(bid).subscribe(
            {
              next: (data) => { 
                // this.bookingDTO = data; 
                console.log(data) 
                this.msg = "booking details fetched"
                this.errorMsg = ""},
              error: (err) => { console.log(err) 
                this.errorMsg = JSON.stringify(err.error)
                this.msg = ""}
      
            }
          )  
        }) 
        this.msg = "payment Done Successfully!"
        this.errorMsg = ""
        this.router.navigate(['/getMyBookings'])},
        
        error: (err) => { console.error('error occured while making payment',err);
        Swal.fire({
          title: 'Payment failure',
          text: 'payment already done!',
          icon: 'error',
          showConfirmButton: true
        });
          this.msg = ""}
      }
    );
  }
  else if(this.selectedPaymentType=='UPI' as string){
    console.log(this.upi);
    this.paymentService.makeUPIPaymentForBooking(this.upi,bid).subscribe(
      {
      next: (data) => {
        this.payment=data;
        console.log(this.payment);
        Swal.fire({
          text:"Payment Done Successfully",
          icon:"success",
          showConfirmButton:true,
          timer:2000
        }).then(()=>{
          console.log(bid) ;
          this.bookingService.setBookingStatus(bid).subscribe(
            {
              next: (data) => { 
                // this.bookingDTO = data; 
                console.log(data) 
                this.msg = "booking details fetched"
                this.errorMsg = ""},
              error: (err) => { console.log(err) 
                this.errorMsg = JSON.stringify(err.error)
                this.msg = ""}
      
            }
          )
          
        }) 
        this.msg = "payment Done Successfully!"
        this.errorMsg = ""
        this.router.navigate(['/getMyBookings'])},

        error: (err) => { console.error('error in making the payment :',err);
        Swal.fire({
          title: 'Payment failure',
          text: 'Payment already done!.',
          icon: 'error',
          showConfirmButton: true
        });
        this.msg = ""}
      }
    );}
  }
  
}
