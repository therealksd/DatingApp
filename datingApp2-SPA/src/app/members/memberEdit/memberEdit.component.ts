import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/_models/User';
import { UserService } from 'src/services/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'memberEdit',
  templateUrl: './memberEdit.component.html',
  styleUrls: ['./memberEdit.component.css']
})
export class MemberEditComponent implements OnInit {
  idTosearch:any
  userToshow:User
  updatedUser:User
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.idTosearch=this.route.snapshot.paramMap.get('id') || '/';
    this.userService.getUser(this.idTosearch).subscribe((response:User)=>{
      this.userToshow=response
    })
  }
  onChange(form:NgForm)
  {
    this.updatedUser=form.value
    //console.log(form.value)
    form.reset(this.userToshow)

  }

}
