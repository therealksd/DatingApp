import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/_models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private userService:UserService) { }
  usersToshow:User[]
  usersToshow2:User[]
  liked:boolean

  ngOnInit() {
    this.getMembers()
  }
  getMembers()
  {
    this.userService.getLikeUsers().subscribe(users=>{
      this.usersToshow=users
    })
    this.userService.getUsersWhoLike().subscribe(users=>{
      this.usersToshow2=users
    })
  }

}
