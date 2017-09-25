import { Routes } from '@angular/router';

import { EventsListComponent } from '../events/events-list/events-list.component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event/create-event.component';
import { ErrorsComponent } from '../errors/errors.component';
import { CreateSessionComponent } from '../events/create-event/create-session/create-session.component'

import { EventsListResolverService } from '../events/events-list/events-list-resolver.service';
import { EventRouteActivatorService } from '../events/event-details/event-route-activator.service'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent,
      resolve : {events: EventsListResolverService} },
      //take the events that are returned from the observable
      //and put them in a property named events on the route
    { path: 'events/new', 
      component: CreateEventComponent,
      canDeactivate : ['canDeactivateCreateEvent']
    },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'events/:id', 
      component: EventDetailsComponent, 
      canActivate: [EventRouteActivatorService] 
    },
    { path: '404', component: ErrorsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'} //path to module; after# is the ExportName
];