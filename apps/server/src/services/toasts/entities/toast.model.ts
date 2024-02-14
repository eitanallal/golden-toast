import { UUID, UUIDV4 } from 'sequelize';
import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.model';

@Table
export class Toast extends Model<Partial<Toast>> {
  @Column({ primaryKey: true, type: UUID, defaultValue: UUIDV4 })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: UUID, defaultValue: UUIDV4 })
  userId: string;

  @Column
  date: Date;

  @Column({ defaultValue: false })
  hasHappened: boolean;

  @BelongsTo(() => User)
  user: User;
}
