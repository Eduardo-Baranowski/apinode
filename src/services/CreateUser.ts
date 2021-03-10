import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import {UserRole} from '../models/User';

interface UserDTO {
  name: string;
  telefone: string;
  email: string;
  idade: number;
  peso: number;
  etnia: UserRole;
  password: string;
}

class CreateUserService {
  public async execute({ name, telefone, email, idade, peso, etnia, password }: UserDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const emailExists = await usersRepository.findOne({ email });
    if (emailExists) {
      throw new Error('Email already exists!');
    }
    const encryptedPassword = await hash(password, 8);
    const user = usersRepository.create({
      name,
      telefone,      
      email,
      idade,
      peso,
      etnia,
      password: encryptedPassword,
    });
    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
