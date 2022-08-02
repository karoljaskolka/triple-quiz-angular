import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tq-quizzes-header',
  templateUrl: './quizzes-header.component.html',
  styleUrls: ['./quizzes-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzesHeaderComponent {
  faGraduationCap = faGraduationCap;
}
