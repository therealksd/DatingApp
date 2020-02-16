import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/_models/User';
import { Injectable } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { AlertifyService } from 'src/services/alertify.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable()
export class EditResolve implements Resolve<User> {

    constructor(private router:Router,private userService:UserService,private alertify:AlertifyService){}

    resolve(route:ActivatedRouteSnapshot): Observable<User>{
        return this.userService.getUser(route.params['id']).pipe(catchError(error=>{
            this.alertify.error(error);
            this.router.navigate(['/members']);
            return of(null);
        }));
    }
}
