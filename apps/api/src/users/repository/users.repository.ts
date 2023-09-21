import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findUserById(id: string) {
    return this.userModel.findOne({ id }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findUserById(id);
    if (!user) return new NotFoundException();
    user.favoritePokemons = updateUserDto.favoritePokemons;
    return user.save();
  }
}
