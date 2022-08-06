import { createAction, props } from '@ngrx/store';
import { QuizDto } from '../../dtos/quiz';

export const loadQuizzes = createAction('[Quizzes] Load');
export const setQuizzes = createAction(
  '[Quizzes] Set',
  props<{ quizzes: QuizDto[] }>()
);
