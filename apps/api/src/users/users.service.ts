import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findById(id: string) {
    return this.userRepository.findUserById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.userRepository.update(id, updateUserDto);
  }
}
