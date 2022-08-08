import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards';
import { QuizComponent } from './views/quiz/quiz.component';
import { QuizzesComponent } from './views/quizzes/quizzes.component';

const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: QuizComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
