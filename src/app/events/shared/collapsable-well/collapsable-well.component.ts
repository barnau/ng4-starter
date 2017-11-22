import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {

  visible: boolean = true;

  constructor() { }

  toggleContent() {
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
