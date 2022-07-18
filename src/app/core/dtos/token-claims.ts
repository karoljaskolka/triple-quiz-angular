import { role } from '../types/role';

export interface TokenClaimsDto {
  userLogin: string;
  userId: string;
  userRole: role;
}
