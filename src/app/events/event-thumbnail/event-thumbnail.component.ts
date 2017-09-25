import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastrService } from 'toastr-ng2';
import { IEvent } from '../shared/event.model'

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

 @Input() event:IEvent;
 @Output() eventClicked = new EventEmitter;

 logFoo() {
  console.log('foo');
 }

 logEventName() {
  this.eventClicked.emit(this.event.name);
 }

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }


  

}
