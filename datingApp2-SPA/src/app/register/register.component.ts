import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @Input('valuesFromHome') valuesFromHome:any
  @Output('registerMode') registerMode=new EventEmitter();
  ngOnInit() {
  }

  CancelRegisterMode()
  {
    this.registerMode.emit(false)
  }

}
