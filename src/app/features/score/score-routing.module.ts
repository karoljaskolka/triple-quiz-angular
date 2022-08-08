import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards';
import { ScoreComponent } from './views/score/score.component';

const routes: Routes = [
  {
    path: ':id',
    component: ScoreComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreRoutingModule {}
