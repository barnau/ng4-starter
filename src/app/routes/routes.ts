import { Routes } from '@angular/router';

import { EventsListComponent } from '../events/events-list/events-list.component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { ErrorsComponent } from '../errors/errors.component';

import { EventRouteActivatorService } from '../events/event-details/event-route-activator.service'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', 
      component: CreateEventComponent,
      canDeactivate : ['canDeactivateCreateEvent']
},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: ErrorsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
];