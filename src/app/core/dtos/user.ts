import { role } from 'src/app/core/types/role';
import { uuid } from 'src/app/core/types/uuid';

export interface UserDto {
  id: uuid;
  login: string;
  role: role;
  createdAt: string;
}
