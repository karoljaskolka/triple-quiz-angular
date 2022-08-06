import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { QuizDto } from '../../../../core/dtos/quiz';
import { loadQuizzes } from '../../../../core/store/quizzes/quizzes.actions';
import {
  selectQuizzes,
  selectQuizzesLoaded,
} from '../../../../core/store/quizzes/quizzes.selectors';
import { AppState } from '../../../../core/store/state';

@Component({
  selector: 'tq-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzesComponent implements OnInit {
  quizzes$?: Observable<QuizDto[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectQuizzesLoaded)
      .pipe(
        take(1),
        map((loaded) => {
          if (!loaded) this.store.dispatch(loadQuizzes());
        })
      )
      .subscribe();

    this.quizzes$ = this.store.select(selectQuizzes);
  }
}
