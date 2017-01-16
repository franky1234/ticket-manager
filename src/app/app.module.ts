import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { SearchTravelComponentComponent } from './search-travel-component/search-travel-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { TicketComponent } from './ticket/ticket.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchTravelComponentComponent,
    ReservationComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
