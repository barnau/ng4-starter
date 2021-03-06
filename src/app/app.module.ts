import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from '../../node_modules/toastr-ng2';
import { JQ_TOKEN } from './common/jquery.service';


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
import { CreateSessionComponent } from './events/create-event/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsableWellComponent } from './events/shared/collapsable-well/collapsable-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { VoterService } from './events/event-details/voter.service';

declare var jQuery: Object;



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: [
    EventService,
  { provide: JQ_TOKEN, useValue: jQuery},
    EventsListResolverService,
    EventRouteActivatorService,
    VoterService,
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
