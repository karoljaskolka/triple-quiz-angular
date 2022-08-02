import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuizDto } from '../../../../core/dtos/quiz';
import { ResourceService } from '../../../../core/services/resource.service';

@Component({
  selector: 'tq-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzesComponent implements OnInit {
  quizzes$?: Observable<QuizDto[]>;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.quizzes$ = this.resourceService
      .getResources<QuizDto>('quizzes')
      .pipe(map((res) => res.results));
  }
}
