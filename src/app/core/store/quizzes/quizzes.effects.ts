import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadQuizzes, setQuizzes } from './quizzes.actions';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ResourceService } from '../../services/resource.service';
import { QuizDto } from '../../dtos/quiz';

@Injectable()
export class QuizzesEffects {
  loadQuizzes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuizzes),
      switchMap(() =>
        this.resourceService.getResources<QuizDto>('quizzes').pipe(
          map((res) => setQuizzes({ quizzes: res.results })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private resourceService: ResourceService
  ) {}
}
