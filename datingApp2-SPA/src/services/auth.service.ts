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

login(model)
{
return this.http.post(this.baseUrl+'login',model)
.subscribe((response:any)=>{
  if(response)
  {
    //console.log(response)
    localStorage.setItem("token",response.userName)
  }
},(error:any)=>{

 this.alertify.error("Verification Failed")
})
}

loggedIn():boolean
{
  let token=localStorage.getItem("token");
  if(token===null) return false
  return true
}
}
