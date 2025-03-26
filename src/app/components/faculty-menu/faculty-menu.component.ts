import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-menu',
  templateUrl: './faculty-menu.component.html',
  styleUrls: ['./faculty-menu.component.css']
})
export class FacultyMenuComponent {

  constructor(private Router: Router) {}

  logout() {
    // Clear user session (e.g., remove token)
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Redirect to Home Page
    this.Router.navigate(['/']);
  }
}

