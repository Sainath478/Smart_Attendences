import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {

   constructor(private Router: Router) {}

    logout() {
      // Clear user session (e.g., remove token)
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      // Redirect to Home Page
      this.Router.navigate(['/']);
    }

}
