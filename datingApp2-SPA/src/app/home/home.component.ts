import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode:boolean=false
  values:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues()
  }
  registerToggle()
  {
     this.registerMode=true
  }
  getValues()
  {
    this.http.get("https://localhost:5001/api/values")
    .subscribe(v=>{
      this.values=v
    })
  }
  registerModeChange(value:boolean)
  {
    this.registerMode=value
  }

}
