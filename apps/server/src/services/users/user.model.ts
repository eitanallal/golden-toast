import { UUID, UUIDV4 } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Criminal } from '../criminals/criminal.model';
import { Toast } from '../toasts/toast.model';

@Table
export class User extends Model<Partial<User>> {
  @Column({ primaryKey: true, type: UUID, defaultValue: UUIDV4 })
  id: string;

  @Column({ unique: true })
  username: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isAdmin: boolean;

  @HasMany(() => Criminal)
  criminals: Criminal[];

  @HasMany(() => Toast)
  toasts: Toast[];
}
