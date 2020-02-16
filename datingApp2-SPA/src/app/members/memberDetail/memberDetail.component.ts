import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/_models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-memberDetail',
  templateUrl: './memberDetail.component.html',
  styleUrls: ['./memberDetail.component.css']
})
export class MemberDetailComponent implements OnInit {
  idTosearch:any
  userToshow:User
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.idTosearch=this.route.snapshot.paramMap.get('id') || '/';
    this.userService.getUser(this.idTosearch).subscribe((response:User)=>{
      this.userToshow=response
    })
  }
  

}
