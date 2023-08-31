import { Time } from "@angular/common";

export class ScheduleFlight{
    scheduleId!: number;
    flightId!: number;
    sourceAirport!: string;
    destinationAirport!: string;
    departureTime!: string;
    arrivalTime!: string;
    price!: number;
    carrierName?: string;
}