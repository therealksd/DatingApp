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
updateUser(user:User)
{
  return this.http.put(this.baseUrl+'update',user)
}

getLikeUsers():Observable<User[]>
{
  let likerID=localStorage.getItem('idd')
  return this.http.get<User[]>(this.baseUrl+'getLikeUsers/'+likerID)
}
getUsersWhoLike():Observable<User[]>
{
  let likerID=localStorage.getItem('idd')
  return this.http.get<User[]>(this.baseUrl+'getUsersWhoLike/'+likerID)
}
sendLike(likeeID:number)
{
  let likerID=localStorage.getItem('idd')
  if(likerID!=null)
   return this.http.post(this.baseUrl+likerID+'/like/'+likeeID,{})
}

}
