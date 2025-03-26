import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private userService : UserService ) { }


  ngOnInit(): void {
    let username = this.activatedRouter.snapshot.paramMap.get('username');
    this.getUserByUsername(username);}



  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role : ''
  };

  updateUser() {
    this.userService.editUser(this.user).subscribe((res) => {
      console
      alert('User updated successfully');
    }
    );
  }

    getUserByUsername(username :any) {
    this.userService.getUserByUsername(username).subscribe((res) => {
      this.user = res;
    });
}

}
