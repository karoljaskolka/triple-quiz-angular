import { uuid } from '../types/uuid';
import { UserDto } from './user';

export interface ScoreDto {
  id: uuid;
  score: number;
  quizId: uuid;
  user: UserDto;
}
