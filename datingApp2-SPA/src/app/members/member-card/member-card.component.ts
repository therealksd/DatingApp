import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/_models/User';
import { UserService } from 'src/services/user.service';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input('UserFromParent') UserFromParent:User
  constructor(private userService:UserService,
              private alertify:AlertifyService) { }

  ngOnInit() {
  }
  sendLike(likeeId:number)
  {
    this.userService.sendLike(likeeId).subscribe(()=>{
      this.alertify.success("You liked:" +this.UserFromParent.knownAs)
    },error=>{
      this.alertify.error(error.error);
    })
    
    
  }

}
//UserFromParent.url || '