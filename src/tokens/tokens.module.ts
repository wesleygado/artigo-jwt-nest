import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
})
export class TokensModule {}
