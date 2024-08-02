import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { configModuleOptions, typeOrmModuleAsyncOptions } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { TEnvConfig } from './types';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
