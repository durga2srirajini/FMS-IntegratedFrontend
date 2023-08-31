import { CardPayment } from "./card-payment";
import { UPIPayment } from "./upipayment";

export class Payment {
    paymentId!:number;
    txId!:string;
    type!:string;
    status!:string;
    card?:CardPayment;
    upi?:UPIPayment;
    amount!:number;
    bookingId!:number;
}
