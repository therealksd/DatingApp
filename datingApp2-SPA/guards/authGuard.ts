import { CanActivate } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { AlertifyService } from 'src/services/alertify.service';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService,
                private alertify:AlertifyService) {}
    canActivate():boolean
    {
      if(this.authService.loggedIn()) {console.log("auth passed");return true;}
      this.alertify.error("You are not authorized!!!")
      return false;
    }
}
