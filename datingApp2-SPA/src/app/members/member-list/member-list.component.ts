import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/_models/User';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
allUsers:User[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response=>{
      //console.log(response)
      this.allUsers=response
      //console.log(this.allUsers)
    })
  }

}
