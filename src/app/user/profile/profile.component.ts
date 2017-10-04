import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { ToastrService } from 'toastr-ng2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profileForm: FormGroup;
firstName: FormControl;
lastName: FormControl;


  constructor(private router: Router, 
              private auth: AuthService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  
  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastrService.success("Profile update was successful", "Nice");
      this.router.navigate(['/events'])
    }
  }

  validateLastName() {
   return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }


}
