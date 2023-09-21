import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './repository/users.repository';
import { updateUser } from 'test/mock/user.mock';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: {
            create: jest.fn(),
            findUserById: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersRepository = moduleRef.get<UsersRepository>(UsersRepository);
  });

  describe('create', () => {
    it('should call userRepository.create with createUserDto', () => {
      const createUserDto = {
        /* provide test data */
      };

      usersService.create(createUserDto);

      expect(usersRepository.create).toHaveBeenCalledWith(createUserDto);
    });

    // Add more test cases for create() if needed
  });

  describe('findById', () => {
    it('should call userRepository.findUserById with the provided id', () => {
      const userId = '123';

      usersService.findById(userId);

      expect(usersRepository.findUserById).toHaveBeenCalledWith(userId);
    });

    // Add more test cases for findById() if needed
  });

  describe('update', () => {
    it('should call userRepository.update with the provided id and updateUserDto', () => {
      const userId = '123';
      const updateUserDto = updateUser;

      usersService.update(userId, updateUserDto);

      expect(usersRepository.update).toHaveBeenCalledWith(
        userId,
        updateUserDto,
      );
    });

    // Add more test cases for update() if needed
  });
});
