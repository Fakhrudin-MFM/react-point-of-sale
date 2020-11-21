import { UserEntity } from 'modules/user/entities';

export class UserDto {
  readonly userId: string;

  readonly userName: string;

  readonly email: string;

  constructor(userEntity: UserEntity) {
    this.userId = userEntity.userId;
    // this.userName = userEntity.userName;
    this.email = userEntity.email;
  }
}
