import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'quizzes',
    loadChildren: () =>
      import('./features/quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'scores',
    loadChildren: () =>
      import('./features/score/score.module').then((m) => m.ScoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
