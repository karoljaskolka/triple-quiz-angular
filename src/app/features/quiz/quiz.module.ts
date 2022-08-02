import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizzesComponent } from './views/quizzes/quizzes.component';
import { QuizItemComponent } from './components/quiz-item/quiz-item.component';
import { SharedComponentsModule } from '../../shared/components/shared/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizComponent } from './views/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AnswersComponent } from './components/answers/answers.component';
import { RiddleComponent } from './components/riddle/riddle.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScoreDialogComponent } from './components/score-dialog/score-dialog.component';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';
import { QuizzesHeaderComponent } from './components/quizzes-header/quizzes-header.component';
import { QuizItemsComponent } from './components/quiz-items/quiz-items.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    QuizItemComponent,
    QuizComponent,
    QuestionComponent,
    AnswerComponent,
    AnswersComponent,
    RiddleComponent,
    TimerComponent,
    ScoreDialogComponent,
    QuizzesHeaderComponent,
    QuizItemsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    QuizRoutingModule,
    FontAwesomeModule,
    SharedComponentsModule,
    SharedDirectivesModule,
  ],
})
export class QuizModule {}
