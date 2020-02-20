import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from 'src/services/alertify.service';
import { User } from 'src/_models/User';
import { take } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser:User;
  idOfCurrentUser

  constructor(public authService:AuthService,private route:Router,private alertify:AlertifyService) { }
  ngOnInit() {
  }
  async login(form:NgForm)
  {
    this.authService.login(form.value).pipe(take(1))
    .subscribe((response:User)=>{
      if(response)
      {

        this.currentUser=response;
        console.log(this.currentUser)
        localStorage.setItem("token",this.currentUser.userName)
        localStorage.setItem("idd",String(this.currentUser.id))
        this.alertify.success("Successfully LoggedIn")
      }
    },(error:any)=>{
    
     this.alertify.error("Verification Failed")
    },()=>{
      this.route.navigate(['/members'])
    })
   }
  signout()
  {
    localStorage.clear();
    this.route.navigate(['/']);
    this.alertify.success("Successfully Logged Out")
  }

}
