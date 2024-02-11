import { UUID, UUIDV4 } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

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

  @Column({ defaultValue: false })
  isAdmin: boolean;
}
