import { User } from './user.types';

export interface CriminalType {
  id: string;
  userId: string;
  isPersonNonGrata: boolean;
  user: User;
}
