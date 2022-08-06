import { createSelector } from '@ngrx/store';
import { QuizDto } from '../../dtos/quiz';
import { uuid } from '../../types/uuid';
import { AppState } from '../state';

export const selectQuizzesLoaded = (state: AppState): boolean =>
  state.quizzesState.loaded;
export const selectQuizzes = (state: AppState): QuizDto[] =>
  state.quizzesState.quizzes;
export const selectQuiz = (id: uuid) =>
  createSelector(selectQuizzes, (quizzes: QuizDto[]) => {
    return quizzes.find((quiz) => quiz.id === id);
  });
