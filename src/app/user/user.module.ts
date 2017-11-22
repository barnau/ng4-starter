import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { userRoutes } from '../routes/user.routes';

@NgModule({
  imports: [
    CommonModule, //load this instead of browserModule (as it is in AppModule) for lazy loading
    RouterModule.forChild(userRoutes), //Notice .forChild when not the main AppModule
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [
  
  ]
})
export class UserModule { }
