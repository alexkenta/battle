import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  playerTwoInfo:any = new BehaviorSubject([]);

  playerOneInfo:any = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getUserOne(user){
    this.http.get(`https://api.github.com/users/${user}`)
    .subscribe(
      (res) => {
        console.log("success", res);
        this.playerOneInfo.next(res);
      },
      (err) => {
        console.log("error in user1 service", err)
        this.playerOneInfo = null;
      }
    )
  }

  getUserTwo(user){
    this.http.get(`https://api.github.com/users/${user}`)
    .subscribe(
      (res) => {
        console.log("success user2", res);
        this.playerTwoInfo.next(res);
      }
    )
  }

  saveUser(user){
    console.log("user from service",user)
    return this.http.post('/saveUser', user)
  }
  
  getAllUsers(){
    return this.http.get('/getAllUsers')
  }
}


