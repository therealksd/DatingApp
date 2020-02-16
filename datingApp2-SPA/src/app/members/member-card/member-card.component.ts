import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/_models/User';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input('UserFromParent') UserFromParent:User
  constructor() { }

  ngOnInit() {
  }

}
//UserFromParent.url || '