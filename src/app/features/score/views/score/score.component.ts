import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { QuizDto, ScoreDto } from '../../../../core/dtos';
import { ResourceService } from '../../../../core/services';
import {
  loadQuizzes,
  selectQuiz,
  selectQuizzesLoaded,
  AppState,
} from '../../../../core/store';
import { uuid } from '../../../../core/types';

@Component({
  selector: 'tq-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnInit {
  quizId?: uuid;
  scores$?: Observable<ScoreDto[]>;
  quiz$?: Observable<QuizDto | undefined>;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['id'];

    this.store
      .select(selectQuizzesLoaded)
      .pipe(
        take(1),
        map((loaded) => {
          if (!loaded) this.store.dispatch(loadQuizzes());
        })
      )
      .subscribe();

    if (this.quizId) {
      this.scores$ = this.resourceService
        .getResources<ScoreDto>('scores', {
          quizId: this.quizId,
          page: '1',
          itemsPerPage: '10',
        })
        .pipe(map((res) => res.results));
      this.quiz$ = this.store.select(selectQuiz(this.quizId));
    } else {
      this.router.navigate(['/']);
    }
  }
}
