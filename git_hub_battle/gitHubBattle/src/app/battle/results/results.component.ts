import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  p1
  p2
  p1Score
  p2Score
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.playerOneInfo
    .subscribe(
      (res) => {
        console.log(res)
        this.p1 = res
        this.p1Score = (this.p1.followers + this.p1.public_repos)*12;
        
      }
    )

    this.usersService.saveUser(this.p1)
        .subscribe(
          (res) => {
            console.log("result from saveUser", res)
          }
        )

    this.usersService.playerTwoInfo
    .subscribe(
      (res) => {
        this.p2 = res
        this.p2Score = (this.p2.followers + this.p2.public_repos)*12
      }
    )

    this.usersService.saveUser(this.p2)
        .subscribe(
          (res) => {
            console.log("result from saveUser", res)
          }
        )

  }
}
