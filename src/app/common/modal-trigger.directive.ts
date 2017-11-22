import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../common/jquery.service';


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  //implements on init so when init event listener will be attached to the containing component
  private el: HTMLElement;
  //('XXXXX') <--- this is Aliasing outside input known as that. inside known as modalId
  @Input('modal-trigger') modalId: string;

  //inject jquery and ElementRef(ref to containing element)
  constructor(@Inject(JQ_TOKEN) private jQuery : any, ref: ElementRef) { 
    //HTMLElement is plain javascript element object 
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    debugger;
    //add click listener to the containing element
    this.el.addEventListener('click', e => {
     this.jQuery(`#${this.modalId}`).modal({});

    })
  }

}
