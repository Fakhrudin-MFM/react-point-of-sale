import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserRegisterDto } from 'modules/auth/dtos';
import { UserService } from 'modules/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly _userService: UserService) {}

  @Get('login')
  @HttpCode(HttpStatus.OK)
  login() {
    return 'logged in successfully';
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() userRegisterDto: UserRegisterDto) {
    return await this._userService.createUser(userRegisterDto);
  }
}
