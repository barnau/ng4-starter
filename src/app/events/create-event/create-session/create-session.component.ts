import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  abstract: FormControl;
  level: FormControl;
  
  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);;
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      level: this.level,
      abstract: this.abstract,
      duration: this.duration
    });
  }

  private restrictedWords(words) {
    
   return (control: FormControl): {[key: string]: any} => { //Custom Validator example/ Don't forget "=>"!!!"
       if(!words || !control.value ) return null;
       var invalidWords = words
          .map( w => control.value.includes(w) ? w : null)
          .filter(w => w != null);
          
      return invalidWords && invalidWords.length > 0
      ? {'restrictedWords': invalidWords.join(', ')}     // <--- this object matches the return type as specified in {[key: string]: any} above
      : null
    }
  }

  saveSession(formValues) {
    let session:ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit(false);
  }
}
