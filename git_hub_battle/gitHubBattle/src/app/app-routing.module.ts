import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './battle/results/results.component';

const routes: Routes = [
  {path: '', component: BattleComponent },
  {path: 'rankings', component: RankingsComponent},
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
