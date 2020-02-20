import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from 'guards/authGuard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/memberDetail/memberDetail.component';
import { MemberEditComponent } from './members/memberEdit/memberEdit.component';

export const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'members',component:MemberListComponent},
    {path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {path:'detail/:id',component:MemberDetailComponent},
            {path:'edit/:id',component:MemberEditComponent}
        ]},
    {path:'messages',component:MessagesComponent,canActivate:[AuthGuard]},
    {path:'list',component:ListComponent,canActivate:[AuthGuard]},
    {path:'**',redirectTo:'home',pathMatch:'full'},
    
]