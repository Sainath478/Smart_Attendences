import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  user = {
    username: '',
    password: '',
  };

  login() {
    this.userService.login(this.user).subscribe((res) => {
      console.log("📌 Login Response:", res); // Debugging

      if (res != null) {
        localStorage.setItem('user', res.username);  // ✅ Store username
        console.log("✅ Username stored in localStorage:", res.username);

        if (res.role === 'admin') {
          this.router.navigateByUrl('admin-dashboard');
        } else {
          this.router.navigateByUrl('faculty-dashboard');
        }
      } else {
        alert("❌ Invalid username or password!");
      }
    });
  }
}
