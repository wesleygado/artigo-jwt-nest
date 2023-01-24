import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { config } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), AuthModule, TokensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
