import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return {
      usuarios: [
        {
          nome: 'Paulo',
          endereco: 'av paulista',
          telefone: '1155555555',
        },
        {
          nome: 'Maria',
          endereco: 'av faria lima',
          telefone: '1155555580',
        },
        {
          nome: 'Samantha',
          endereco: 'av paulista',
          telefone: '1155555590',
        },
      ],
    };
  }

  async findOneByEmail(username: string) {
    return await this.userRepository.findOneBy({ email: username });
  }
}
