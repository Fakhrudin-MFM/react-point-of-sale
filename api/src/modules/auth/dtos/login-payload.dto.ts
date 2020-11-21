import { UserDto } from 'modules/user/dtos';

import { TokenPayloadDto } from './token-payload.dto';

export class LoginPayloadDto {
  readonly user: UserDto;

  readonly token: TokenPayloadDto;

  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
