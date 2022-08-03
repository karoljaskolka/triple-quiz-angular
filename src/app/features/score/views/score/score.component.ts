import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { QuizDto } from '../../../../core/dtos/quiz';
import { ScoreDto } from '../../../../core/dtos/score';
import { ResourceService } from '../../../../core/services/resource.service';
import { uuid } from '../../../../core/types/uuid';

@Component({
  selector: 'tq-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnInit {
  quizId?: uuid;
  scores$?: Observable<ScoreDto[]>;
  quiz$?: Observable<QuizDto>;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['id'];
    if (this.quizId) {
      this.scores$ = this.resourceService
        .getResources<ScoreDto>('scores', {
          quizId: this.quizId,
          page: '1',
          itemsPerPage: '10',
        })
        .pipe(map((res) => res.results));
      this.quiz$ = this.resourceService.getSingleResource<QuizDto>(
        'quizzes',
        this.quizId
      );
    } else {
      this.router.navigate(['/']);
    }
  }
}
