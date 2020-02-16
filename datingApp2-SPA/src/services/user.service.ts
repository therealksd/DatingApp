import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }
baseUrl="https://localhost:5001/api/users/"
getUsers():Observable<User[]>
{
  return this.http.get<User[]>(this.baseUrl)
}

getUser(id):Observable<User>
{
  return this.http.get<User>(this.baseUrl+id)
}

}
