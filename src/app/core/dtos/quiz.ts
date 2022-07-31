import { uuid } from '../types/uuid';
import { QuizTranslationDto } from './quiz-translation';

export interface QuizDto {
  id: uuid;
  en: QuizTranslationDto;
  pl: QuizTranslationDto;
  createdAt: string;
}
