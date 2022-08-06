import { QuizDto } from '../dtos/quiz';

export interface QuizzesState {
  quizzes: QuizDto[];
  loaded: boolean;
}

export interface AppState {
  readonly quizzesState: QuizzesState;
}
