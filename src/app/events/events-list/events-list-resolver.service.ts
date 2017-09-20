import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  
  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvents().map(events => events) //this is short hand for ->
    //typically when you listen to an observable you call .subscribe() instead of .map()
    //but because this is in a resolver we need to actually return the observable instead of subscription
      //this.eventService.getEvents().map((events) => { return events; })
  }


}
