import { ConnectionOptions } from 'typeorm';

export const configDev: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/persistence/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: true,
};

export const configProd: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/persistence/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
};
