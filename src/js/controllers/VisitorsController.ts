import {Component} from '@angular/core';
import {NgbActiveModal, NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Reservation} from "../items/Reservation";
import {ReservationsTableComponent} from './ReservationsController';
import {Berth} from "../items/Berth";
import {Price} from "../items/Price";
import moment = require("moment");
import {ReservationsService} from "../services/ReservationsService";
import construct = Reflect.construct;


@Component({
    selector: 'visitors-table',
    template: require('../../views/components/VisitorsTable.html'),
    providers: [NgbModule, NgbActiveModal]
})
export class VisitorsTableComponent extends ReservationsTableComponent {

    public constructor(
        service: ReservationsService,
        modalService: NgbModal
    ) {
        super(service, modalService);
    }

    get items(): Reservation[] {
        return this.service.current;
    }

    public addItem(): void {
        this.service.addItem(new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Manual',
            moment().subtract(15, 'minutes').toDate(),
            moment().add(120, 'minutes').toDate(),
            7,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ));
    }
}