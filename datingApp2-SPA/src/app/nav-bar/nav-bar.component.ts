import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  idOfCurrentUser
  constructor(public authService:AuthService,private route:Router,private alertify:AlertifyService) { }
  ngOnInit() {
  }
  async login(form:NgForm)
  {
    //console.log("1")
    if(await this.authService.login(form.value))
    {
      this.idOfCurrentUser=localStorage.getItem("idd")
      this.route.navigate(['/members']);
    }
    //console.log("3")
    
    
  }
  signout()
  {
    localStorage.clear();
    this.route.navigate(['/home']);
    this.alertify.success("Successfully Logged Out")
  }

}
