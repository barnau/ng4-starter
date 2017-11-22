import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  login(formValues: IUser) {
   this.authService.loginUser(formValues.userName, formValues.password);
   this.router.navigate(['events']);
  }

  ngOnInit() {
  }

  cancel() {
    
  }

}
