import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/_models/User';
import { UserService } from 'src/services/user.service';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';
import { AlertifyService } from 'src/services/alertify.service';
@Component({
  selector: 'memberEdit',
  templateUrl: './memberEdit.component.html',
  styleUrls: ['./memberEdit.component.css']
})
export class MemberEditComponent implements OnInit {
  idTosearch:any
  userToshow:User
  constructor(private userService:UserService,
              private route:ActivatedRoute,
              private alertify:AlertifyService,
              private router:Router) { }

  ngOnInit() {
    this.idTosearch=this.route.snapshot.paramMap.get('id') || '/';
    this.userService.getUser(this.idTosearch).subscribe((response:User)=>{
      this.userToshow=response
    })
  }
  onChange()
  {
    this.userService.updateUser(this.userToshow).subscribe(response=>{
      //console.log(response)
      this.alertify.success("Successfully Updated Information");
      this.router.navigate(['/home'])

    },error=>{
      this.alertify.error("An Error Occured")
    })
  }

}
