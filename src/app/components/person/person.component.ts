import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  users: User[]
  constructor(private userService: UserService) { }

  ngOnInit(): void { 
    this.fetchAllUsers()
   }

  fetchAllUsers() {
    this.userService.getAllPersons().subscribe( users => {
      console.log(users)
      this.users = users
    })
  }
}
