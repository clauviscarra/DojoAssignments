import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BattleService } from '../battle.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {



  constructor(private _battleService:BattleService, private _router:Router) {this._battleService.reset()}

  user1:any={};
  user2:any= {};
  login = "";
  users:any= [];
  score = 0;


  ngOnInit() {
  }

  onSubmit1(){
    console.log('is this working 1??');
    this._battleService.gitData(this.user1.login)
    .then(user => {
      this.addUser(user,0)
      console.log('this user object', user)
    })
    .catch(err => console.log(err))


  }

  onSubmit2(){
    console.log('is this working 2??');
    this._battleService.gitData(this.user2.login)
    .then(user => {
      this.addUser(user,1)
      console.log(user)
    })
    .catch(err => console.log(err))


  }

  addUser(user, i){
    console.log('are you here?');
    user.score = user.followers + user.public_repos;
    user.image = user.avatar_url;
    this._battleService.create(user)
    .then(user => {this.users[i]= user; console.log(this.users);})
    .catch(err => console.log(err))
  }




}
