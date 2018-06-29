import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';
import { ResultsComponent } from './results/results.component'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})

export class BattleComponent implements OnInit {
  playerOne:any = {name: ''};
  playerTwo:any = {name: ''};
  playerOneInfo: any = null;
  playerTwoInfo: any = null;
  gotPlayerOne = false;
  gotPlayerTwo = false;
 
  
  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
   this.playerOneInfo = null;
   this.playerTwoInfo = null;
   this.gotPlayerOne = false;
   this.gotPlayerTwo = false;

   this.usersService.playerOneInfo.subscribe(
    (user) => {
      this.playerOneInfo = user;
    }

  )

  this.usersService.playerTwoInfo.subscribe(
    (user) => {
      this.playerTwoInfo = user;
    }
  )
  }

  getPlayerOne(){
    console.log("hit player one component")
    console.log(this.playerOne.name)
    this.usersService.getUserOne(this.playerOne.name)
    if(this.playerOneInfo){
      this.gotPlayerOne = true;
    }
  }

  getPlayerTwo(){
    console.log(this.playerTwo)
    this.usersService.getUserTwo(this.playerTwo.name)
    this.gotPlayerTwo = true;
  }

  battle(){
    this.router.navigate(['/results'])
  }

}

