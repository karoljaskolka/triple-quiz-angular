import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ScoreDto, QuizDto } from '../../../../core/dtos';
import { ResourceService } from '../../../../core/services';
import { uuid } from '../../../../core/types';

@Component({
  selector: 'tq-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  questions$?: Observable<any[]>;

  quizId?: uuid;

  currentIndex: number = 0;
  total: number = 0;
  score: number = 0;
  scorePercentage: number = 0;

  dialogOpen: boolean = false;

  MAX_POINTS: number = 5;

  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['id'];
    if (this.quizId) {
      this.questions$ = this.resourceService
        .getResources<QuizDto>('questions', { quizId: this.quizId })
        .pipe(
          map((res) => res.results),
          tap((res: QuizDto[]) => (this.total = res.length))
        );
    }
  }

  nextQuestion(points: number) {
    if (this.currentIndex < this.total - 1) {
      this.score = this.score + points;
      this.currentIndex = this.currentIndex + 1;
      this.cdRef.markForCheck();
    } else if (!this.dialogOpen) {
      this.score = this.score + points;
      this.endQuiz();
    }
  }

  endQuiz() {
    this.scorePercentage = Number(
      ((this.score / (this.total * this.MAX_POINTS)) * 100).toFixed(0)
    );
    this.resourceService
      .postResource<ScoreDto>('scores', {
        score: this.scorePercentage,
        quizId: this.quizId,
      })
      .subscribe();
    this.openDialog();
  }

  openDialog() {
    this.dialogOpen = true;
    this.cdRef.markForCheck();
  }

  closeDialog() {
    this.dialogOpen = false;
    this.router.navigate(['/quizzes']);
    this.cdRef.markForCheck();
  }
}
