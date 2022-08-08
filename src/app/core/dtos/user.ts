import { Role, uuid } from '../../core/types';

export interface UserDto {
  id: uuid;
  login: string;
  role: Role;
  createdAt: string;
}
