import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from '../../node_modules/toastr-ng2';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventsListResolverService } from './events/events-list/events-list-resolver.service'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes/routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';

import { EventService } from './events/shared/event.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: [
    EventService,
    EventsListResolverService,
    EventRouteActivatorService,
    AuthService,
   {
     provide : 'canDeactivateCreateEvent',
     useValue : checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) { //route guard for creat event
  if(component.isDirty)
    return window.confirm("You have not completed your event. Would you like to discard changes?");
  else
    return true;
}
