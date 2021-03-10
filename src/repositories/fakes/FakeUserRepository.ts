import { hash } from 'bcryptjs';
import User from '../../models/User';
import {UserRole} from '../../models/User';
//@ts-expect-error
import { uuid } from 'uuidv4';

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
    
    private users: User[] = [];
    
    public async execute({ name, telefone, email, idade, peso, etnia, password }: UserDTO): Promise<User> {
    
        const user = new User();

        Object.assign(user, {id: uuid(), name, telefone, email, idade, peso, etnia, password});

        this.users.push(user);
        return user;
    }
}

export default CreateUserService;
