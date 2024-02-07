import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<Partial<User>> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  admin: boolean;
}

// Initialize your models with Sequelize
// Sequelize.addModels([User]);
