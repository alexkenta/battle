import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  allUsers:any = []
  constructor(private usersService: UsersService) { 
    this.usersService.getAllUsers()
    .subscribe(
      (response) => {
        this.allUsers = response;
      }
    )
  }

  ngOnInit() {
  }

}
