import { Injectable } from '@angular/core';
import {Reservation} from "../items/Reservation";
import {Berth} from "../items/Berth";
import {Price} from "../items/Price";
import moment = require("moment");

@Injectable()
export class ReservationsService {

    // protected items: Reservation[] = [
    //     { berth: new Berth('B', 4), price: new Price('EUR', 154.55), status: 'Pending', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 7.5 },
    //     { berth: new Berth('BD', 4), price: new Price('EUR', 154.55), status: 'Manual', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 7.5 },
    //     { berth: new Berth('A', 44), price: new Price('KRN', 154.55), status: 'Manual', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 16 },
    //     { berth: new Berth('C', 4), price: new Price('EUR', 154.55), status: 'Pending', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 7.5 },
    //     { berth: new Berth('V', 44), price: new Price('EUR', 154.55), status: 'Manual', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 7.5 },
    //     { berth: new Berth('FD', 4), price: new Price('EUR', 154.55), status: 'Manual', arrival: '2017-06-05', departure: '2017-06-06', harbor: 'Good harbor', size: 7.5 },
    // ];

    protected items: Reservation[] = [
        new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Manual',
            moment().subtract(40, 'minutes').toDate(), moment().add(60, 'minutes').toDate(),
            7,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ),
        new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Pending',
            moment().subtract(40, 'minutes').toDate(), moment().add(60, 'minutes').toDate(),
            8,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ),
        new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Pending',
            moment().add(40, 'minutes').toDate(), moment().add(120, 'minutes').toDate(),
            3,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ),
        new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Pending',
            moment().add(60, 'minutes').toDate(), moment().add(300, 'minutes').toDate(),
            12,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ),
        new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Manual',
            moment().add(40, 'minutes').toDate(), moment().add(120, 'minutes').toDate(),
            7,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ),
    ];

    get all(): Reservation[] {
        return this.items;
    }

    get current(): Reservation[] {
        let date = new Date();
        return this.all.filter((item: Reservation) => {
            return item.status == 'Manual' && item.arrival <= date && item.departure > date;
        });
    }

    get reservations(): Reservation[] {
        let date = new Date();
        return this.all.filter((item: Reservation) => {
            return item.arrival > date || item.status == 'Pending';
        });
    }

    public addItem(item: Reservation) {
        this.items.unshift(item);
    }

    public removeItem(item: Reservation)
    {
        let index = this.items.indexOf(item);
        if (index != -1) {
            this.items.splice(index, 1);
        }
    }
}