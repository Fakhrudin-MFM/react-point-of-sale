import { Injectable } from '@nestjs/common';
import { UserRepository } from 'modules/user/repositories';
import { UserRegisterDto } from 'modules/auth/dtos';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async createUser(userRegisterDto: UserRegisterDto) {
    const user = this._userRepository.create(userRegisterDto);
    await this._userRepository.save(user);

    return user.toDto();
  }

  public async getUserByEmailOrId(id?: string, email?: string) {
    const query = this._userRepository.createQueryBuilder('user');
    query.orWhere('user.email = :email', { email });
    query.orWhere('user.userId = :id', { id });

    return await query.getOne();
  }
}
