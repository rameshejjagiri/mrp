import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    //window.localStorage.clear();
    this.authService.loginSubject.subscribe(data => {
      this.isAuthenticated = data;
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
