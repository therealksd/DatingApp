import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from 'src/services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MembersListComponent } from './members-list/members-list.component';
import { ListComponent } from './list/list.component';
import { appRoutes } from './routes';
import { AuthGuard } from 'guards/authGuard';
@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      MembersListComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
