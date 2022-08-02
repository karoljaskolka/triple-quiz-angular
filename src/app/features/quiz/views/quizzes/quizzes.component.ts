import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuizDto } from '../../../../core/dtos/quiz';
import { ResourceService } from '../../../../core/services/resource.service';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzesComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  quizzes$?: Observable<QuizDto[]>;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.quizzes$ = this.resourceService
      .getResources<QuizDto>('quizzes')
      .pipe(map((res) => res.results));
  }
}
