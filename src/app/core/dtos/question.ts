import { uuid } from '../types/uuid';
import { QuestionTranslationDto } from './question-translation';

export interface QuestionDto {
  id: uuid;
  correct: number;
  quizId: uuid;
  pl: QuestionTranslationDto;
  en: QuestionTranslationDto;
  createdAt: string;
}
