import { User } from './user.types';

export interface Toast {
  id: string;
  userId: string;
  date: string;
  hasHappened: boolean;
  user: User;
}
