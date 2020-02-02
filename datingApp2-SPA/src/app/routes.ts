import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from 'guards/authGuard';

export const appRoutes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'members',component:MembersListComponent,canActivate:[AuthGuard]},
    {path:'messages',component:MessagesComponent,canActivate:[AuthGuard]},
    {path:'list',component:ListComponent,canActivate:[AuthGuard]},
    {path:'**',redirectTo:'home',pathMatch:'full'},
    
]