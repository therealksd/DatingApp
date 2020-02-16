import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="https://localhost:5001/api/Auth/"
constructor(private http:HttpClient,
            private alertify:AlertifyService) { }


signUp(model){
  return this.http.post(this.baseUrl+'register',model)
}

login(model)
{
return this.http.post(this.baseUrl+'login',model)
.subscribe((response:any)=>{
  if(response)
  {
    localStorage.setItem("token",response.userName)
    localStorage.setItem("idd",response.id)
    this.alertify.success("Successfully LoggedIn")
  }
},(error:any)=>{

 this.alertify.error("Verification Failed")
})
}

loggedIn():boolean
{
  let token=localStorage.getItem("token");
  //console.log(token)
  if(!token) return false
  return true
}
}
