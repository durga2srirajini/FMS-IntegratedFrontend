import { Passenger } from "./passenger";

export class Booking {
    bookingId!:number;
    userId!:number;
    sheduleId!:number;
    contactNo!:number;
    passengerCount:number=1;
    // bookingDate!:Date;
    ticketCost:number=3000;
    // bookingStatus:any="BOOKED";   
    passengerList:Passenger[]=[];
  
    
}
