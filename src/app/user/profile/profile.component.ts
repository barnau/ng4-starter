import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  cancel() {
    this.router.navigate(['/events']);
  }

}