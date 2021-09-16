import { Component } from '@angular/core';
import { bounceOutDownOnLeaveAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 1000, delay: 200, translate: '40px' })
  ]
})
export class AppComponent {
  title = 'member-registration-portal';
 
}
