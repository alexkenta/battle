import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './battle/results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { SortbyPipe } from './sortby.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ResultsComponent,
    RankingsComponent,
    SortbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
