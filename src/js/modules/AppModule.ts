import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from '../components/AppComponent';
import { VisitorsTableComponent }  from '../controllers/VisitorsController';
import { ReservationsTableComponent, ReservationsModalContent }  from '../controllers/ReservationsController';

import { ReservationsService } from '../services/ReservationsService';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        VisitorsTableComponent,
        ReservationsTableComponent,
        ReservationsModalContent
    ],
    bootstrap:    [ AppComponent ],
    providers: [
        ReservationsService
    ],
    entryComponents: [ReservationsModalContent]
})
export class AppModule {

}