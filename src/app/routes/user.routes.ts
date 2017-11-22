import { ProfileComponent } from '../user/profile/profile.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent}, // path is the same as /user/profile on; on parent you would do '/profile'
    { path: 'login', component: LoginComponent }
]