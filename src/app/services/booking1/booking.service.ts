import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BookingDTO } from "src/app/models/booking/booking-dto";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class BookingService { 
    constructor(private httpClient: HttpClient) { }
    public getBookingById(bookingId:number): Observable <BookingDTO>{
        return this.httpClient.get<BookingDTO>("http://localhost:8091/api/booking/getBooking/"+bookingId, {responseType: "json"});
    }

    public  setBookingStatus(bookingId:number): Observable<any>{

        return this.httpClient.put("http://localhost:8091/api/booking/setBookingStatus/"+bookingId,{ responseType: "json" });
    
       }
}
