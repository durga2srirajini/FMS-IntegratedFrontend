import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CardPayment } from 'src/app/models/payment_models/card-payment';
import { UPIPayment } from 'src/app/models/payment_models/upipayment';
import { PaymentDTO } from 'src/app/models/payment_models/payment-dto';
import { Payment } from 'src/app/models/payment_models/payment';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class PaymentService {
  constructor(private httpClient: HttpClient) { }
    public makeCardPaymentForBooking(card:CardPayment,bookingId:number): Observable<any>{
        return this.httpClient.post("http://localhost:8095/api/payment/makeCardPayment/"+bookingId,card, {responseType: "text"});
    }

    public makeUPIPaymentForBooking(upi:UPIPayment,bookingId:number): Observable<any>{
        return this.httpClient.post("http://localhost:8095/api/payment/makeUPIPayment/"+bookingId,upi, {responseType: "text"});
    }

    public getPaymentById(paymentId:number): Observable<PaymentDTO>{
        return this.httpClient.get<PaymentDTO>("http://localhost:8095/api/payment/getPaymentById/"+paymentId, {responseType: "json"});
    }

    public getPaymentByBookingId(bookingId:number): Observable<PaymentDTO>{
        return this.httpClient.get<PaymentDTO>("http://localhost:8095/api/payment/getPaymentByBookingId/"+bookingId, {responseType: "json"});
    }

    public updatePayment(bookingId:number,pay:Payment): Observable<any>{
        return this.httpClient.put("http://localhost:8095/api/payment/updatePayment/"+bookingId,pay, {responseType: "json"});
    }

    public deletePayment(paymentId:number): Observable<any>{
        return this.httpClient.delete("http://localhost:8095/api/payment/deletePayment/"+paymentId, {responseType: "json"});
    }

    public refundPayment(bookingId:number): Observable<any>{
        return this.httpClient.put("http://localhost:8095/api/payment/refundPayment/"+bookingId, {responseType: "json"});
    }

    public getAllPayments(): Observable<PaymentDTO[]> {
        return this.httpClient.get<PaymentDTO[]>("http://localhost:8095/api/payment/payments", {responseType: "json"});
    }

    public  setBookingStatus(bookingId:number): Observable<any>{

        return this.httpClient.put("http://localhost:8091/setBookingStatus/"+bookingId,{ responseType: "json" });
    
       }
}
