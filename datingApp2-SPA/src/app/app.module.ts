import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from 'src/services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { appRoutes } from './routes';
import { AuthGuard } from 'guards/authGuard';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MemberDetailComponent } from './members/memberDetail/memberDetail.component';
import { MemberEditComponent } from './members/memberEdit/memberEdit.component';
import { EditResolve } from 'src/_resolvers/editResolve';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      ListComponent,
      MemberDetailComponent,
      MemberCardComponent,
      MemberListComponent,
      MemberEditComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      CommonModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,AuthGuard,EditResolve
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
