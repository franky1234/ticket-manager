import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationComponent } from './reservation/reservation.component';
import { SearchTravelComponentComponent } from './search-travel-component/search-travel-component.component';
import {TicketComponent} from './ticket/ticket.component';
const routes: Routes = [
    { path : '', redirectTo: '/search-travel-component', pathMatch: 'full' },   
    { path: 'search-travel-component',  component: SearchTravelComponentComponent },
    { path : 'reservations', component: ReservationComponent },
    { path : 'tickets', component : TicketComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
