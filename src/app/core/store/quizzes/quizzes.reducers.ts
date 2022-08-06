import { Action, createReducer, on } from '@ngrx/store';
import { QuizzesState } from '../state';
import { setQuizzes } from './quizzes.actions';

export const initialState: QuizzesState = { quizzes: [], loaded: false };

export const _quizzesReducer = createReducer(
  initialState,
  on(setQuizzes, (state, { quizzes }) => ({ quizzes: quizzes, loaded: true }))
);

export function quizzesReducer(
  state: QuizzesState | undefined,
  action: Action
) {
  return _quizzesReducer(state, action);
}
