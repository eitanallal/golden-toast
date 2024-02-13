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
export class Criminal extends Model<Partial<Criminal>> {
  @Column({ primaryKey: true, type: UUID, defaultValue: UUIDV4 })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: UUID, defaultValue: UUIDV4 })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @Column({ defaultValue: false })
  isPersonNonGrata: boolean;
}
