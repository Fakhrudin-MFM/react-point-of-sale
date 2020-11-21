import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  LoginPayloadDto,
  UserLoginDto,
  UserRegisterDto,
} from 'modules/auth/dtos';
import { AuthService } from 'modules/auth/services';
import { UserService } from 'modules/user';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() userLoginDto: UserLoginDto) {
    const user = await this._authService.validateUser(userLoginDto);
    const token = await this._authService.createToken(user);

    return new LoginPayloadDto(user.toDto(), token);
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() userRegisterDto: UserRegisterDto) {
    return await this._userService.createUser(userRegisterDto);
  }
}
