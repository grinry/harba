import {Berth} from "./Berth";
import {Price} from "./Price";
import moment = require("moment");
export type ReservationStatus = 'Manual' | 'Pending';

export class Reservation {
    public status: ReservationStatus;
    public berth: Berth;
    public arrival: Date;
    public departure: Date;
    public size: number;
    public price: Price;
    public harbor: string;
    public boat: string;
    public captain: string;

    constructor(
        berth: Berth,
        price: Price,
        status: ReservationStatus,
        arrival: Date,
        departure: Date,
        size: number,
        harbor: string,
        boat: string,
        captain: string
    ) {
        this.berth = berth;
        this.price = price;
        this.status = status;
        this.arrival = arrival;
        this.departure = departure;
        this.size = size;
        this.harbor = harbor;
        this.boat = boat;
        this.captain = captain;
    }

    getArrival(): string {
        return moment(this.arrival).format('Y-MM-DD HH:mm');
    }

    getDeparture(): string {
        return moment(this.departure).format('Y-MM-DD HH:mm');
    }

    get computed_arrival(): string {
        return this.getArrival();
    }

    get computed_departure(): string {
        return this.getDeparture();
    }
}
