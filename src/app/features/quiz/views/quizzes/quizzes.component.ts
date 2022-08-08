import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { QuizDto } from '../../../../core/dtos';
import {
  loadQuizzes,
  selectQuizzes,
  selectQuizzesLoaded,
  AppState,
} from '../../../../core/store';

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
