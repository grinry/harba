import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Reservation} from "../items/Reservation";
import {ReservationsService} from "../services/ReservationsService";
import {Berth} from "../items/Berth";
import {Price} from "../items/Price";
import moment = require("moment");

@Component({
    selector: 'reservations-table',
    template: require('../../views/components/ReservationsTable.html'),
    providers: [NgbModule, NgbActiveModal]
})
export class ReservationsTableComponent {
    page: number = 1;
    perPage: number = 5;
    arr = Array;

    public constructor(
        public service: ReservationsService,
        public modalService: NgbModal
    ) { }

    get items(): Reservation[] {
        return this.service.reservations;
    }

    get paginate(): Reservation[] {
        return this.items.splice(this.page * this.perPage - this.perPage, this.perPage);
    }

    get pages(): number {
        return Math.ceil(this.items.length / this.perPage);
    }

    setPage(page: number = 1, $event): void {
        $event.preventDefault();
        this.page = page > 1 ? page : 1;
    }

    public addItem(): void {
        this.service.addItem(new Reservation(
            new Berth('B', 4),
            new Price('EUR', 15),
            'Pending',
            moment().add(15, 'minutes').toDate(),
            moment().add(120, 'minutes').toDate(),
            7,
            'Main harbor',
            'Black pearl',
            'Jack Sparrow'
        ));
    }

    public showItem(item: Reservation): void {
        const modalRef = this.modalService.open(ReservationsModalContent);
        modalRef.componentInstance.item = item;
    }

    public approve(item: Reservation): void {
        item.status = 'Manual';
    }

    public decline(item: Reservation): void {
        this.service.removeItem(item);
    }
}

@Component({
    selector: 'reservations-modal-content',
    template: require('../../views/components/ReservationModal.html')
})
export class ReservationsModalContent {
    @Input() item : Reservation;

    constructor(private activeModal: NgbActiveModal) {}
}