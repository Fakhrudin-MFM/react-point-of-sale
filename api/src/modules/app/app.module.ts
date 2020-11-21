import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'modules/auth';
import { UserModule, UserSubscriber } from 'modules/user';
import { configDev } from 'persistance';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.development.env' }),
    TypeOrmModule.forRoot({
      ...configDev, // TODO: Update this later
      subscribers: [UserSubscriber],
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
