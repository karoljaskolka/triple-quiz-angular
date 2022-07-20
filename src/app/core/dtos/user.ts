import { Role } from '../../core/types/role';
import { uuid } from '../../core/types/uuid';

export interface UserDto {
  id: uuid;
  login: string;
  role: Role;
  createdAt: string;
}
