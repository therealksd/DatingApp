import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { AlertifyService } from 'src/services/alertify.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService,
              private alertify:AlertifyService,
              private router:Router) { }
  @Input('valuesFromHome') valuesFromHome:any
  @Output('registerMode') registerMode=new EventEmitter();
  registerForm:FormGroup;
  ngOnInit() {
    this.registerForm=new FormGroup({
      gender:new FormControl('male'),
      userName:new FormControl('',Validators.required),
      knownAs:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(7)]),
      confirmPassword:new FormControl('',Validators.required)
    },this.passwordMatchValidator)

  }
  passwordMatchValidator(f:FormGroup)
  {
    return f.get('password').value === f.get('confirmPassword').value ? null : {'mismatch':true};
  }
  register()
  {
    if(this.registerForm.valid)
    {
    //let t:date=this.registerForm.get('date')
    
      /*this.authService.signUp(this.registerForm.value).subscribe(()=>{
       this.alertify.success("Successfully Signed In")
      },error=>{
        this.alertify.error('error occured-'+error);
      },async ()=>{
        await this.authService.login(this.registerForm.value)
        if(this.authService.loggedIn)
        {
          this.router.navigate(['/members'])
          this.alertify.success("Successfully Logged In")
        }
        
      })*/
    }
    
    //console.log(f.value)
  }

  CancelRegisterMode()
  {
    this.registerMode.emit(false)
  }

}
