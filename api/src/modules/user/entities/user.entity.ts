import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { AbstractEntity, Role } from 'common';
import { UserDto } from 'modules/user/dtos';

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity<UserDto> {
  @PrimaryColumn({ name: 'id' })
  userId: string;

  @Column({ name: 'fullName' })
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.NonAdmin })
  role: Role;

  @Column({ default: false })
  isActivated: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  dtoClass = UserDto;
}
