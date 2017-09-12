import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
   const exists =  !!this.eventService.getEvent(+route.params['id']); //!! cast to bool // + cast to Number

   if(!exists)
      this.router.navigate(['/404']);

   return exists;
  }

}
