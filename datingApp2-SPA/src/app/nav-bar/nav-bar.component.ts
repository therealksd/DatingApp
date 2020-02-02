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

  constructor(public authService:AuthService,private rout:Router,private alertify:AlertifyService) { }
  ngOnInit() {
  }
  async login(form:NgForm)
  {
    await this.authService.login(form.value);
    if(this.authService.loggedIn()===true)
    {
      this.rout.navigate(['/home']);
      this.alertify.success("Successfully LoggedIn")
    }
  }
  signout()
  {
    localStorage.clear();
    this.rout.navigate(['/home']);
    this.alertify.success("Successfully Logged Out")
  }

}
