import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking_models/booking';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
 
  constructor(private httpClient: HttpClient) { }

  public  addBooking(booking:Booking): Observable<any>{
    return this.httpClient.post("http://localhost:8091/api/booking/addBooking", booking,{ responseType: "json" }); 
   }
   public  updateBooking(booking:Booking): Observable<any>{
    return this.httpClient.put("http://localhost:8091/api/booking/modifyBooking/modifyPassenger/booking", booking,{ responseType: "json" }); 
   }

   public getAllBookings(): Observable<any> {
    return this.httpClient.get("http://localhost:8091/api/booking/allBookings", {responseType: "json" });
  }
  
  public getMyBookings(userId:number): Observable<any> {
    return this.httpClient.get("http://localhost:8091/api/booking/userBookings/"+55, {responseType: "json" });
  }

  public  removePassenger(passengerId:number,booking:Booking,price:number): Observable<any>{
    return this.httpClient.put("http://localhost:8091/api/booking/cancelSingleTicket/booking/"+passengerId+"?price=3000",booking,{responseType: "json" }); 
   }
  
   public cancelBooking(bookingId:number):Observable<any>{
    return this.httpClient.put("http://localhost:8091/api/booking/cancelBooking/"+bookingId,{responseType: "json" })
   }

   public bookedTicketsCount(sheduleId:number):Observable<any>{
    return this.httpClient.get("http://localhost:8091/api/booking/passengerCount/"+sheduleId, {responseType: "json" });
   }
   public validateBooking(bookingId:number): Observable<any> {
    return this.httpClient.get("http://localhost:8091/api/booking/validateBooking/"+bookingId, {responseType: "json" });
   }
   


  public getPaidBookingsByUserId(userId:number): Observable<any> {

    return this.httpClient.get("http://localhost:8091/api/booking/userPaidBookings/"+userId, {responseType: "json" });

  }

  public getAllConfirmedBookings(): Observable<any> {

    return this.httpClient.get("http://localhost:8091/api/booking/allConfirmedBookings", {responseType: "json" });

  }

  public  setBookingStatus(bookingId:number): Observable<any>{

    return this.httpClient.put("http://localhost:8091/api/booking/setBookingStatus/"+bookingId,{ responseType: "json" });

   }
}
