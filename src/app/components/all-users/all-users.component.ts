import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  constructor(private userService:UserService) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.userList = response;
      console.log(response);}

    );



  }

  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((response) => {
      alert(response);
      this.getAllUsers();
    }

    );

}




}

