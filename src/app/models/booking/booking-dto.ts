export class BookingDTO {
    bookingId!:number;
    userId!:number;
    contactNo!:number;
    passengerCount:number=1;
    bookingDate!:Date;
    ticketCost!:number;
    bookingStatus!:string;
}
