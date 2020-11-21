import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import {
  UserNotFoundException,
  UserPasswordNotValidException,
} from 'exceptions';
import { TokenPayloadDto, UserLoginDto } from 'modules/auth/dtos';
import { UserEntity, UserService } from 'modules/user';
import { HashingService } from 'utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly _jwtService: JwtService,
    private readonly _userService: UserService,
  ) {}

  public async createToken(user: UserEntity): Promise<TokenPayloadDto> {
    const { userId, userName, role } = user;

    return new TokenPayloadDto({
      expiresIn: this._configService.get('JWT_EXPIRATION_TIME'),
      accessToken: await this._jwtService.signAsync({ userId, userName, role }),
    });
  }

  public async validateUser(userLoginDto: UserLoginDto) {
    const user = await this._userService.getUserByEmailOrId(
      userLoginDto.userId,
    );

    if (!user) {
      throw new UserNotFoundException();
    }

    const isPasswordValid = await HashingService.validateHash(
      userLoginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UserPasswordNotValidException();
    }

    return user;
  }
}
