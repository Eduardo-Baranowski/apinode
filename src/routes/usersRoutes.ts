import { Router } from 'express';
import CreateUserService from '../services/CreateUser';
import { registerValidation } from '../middlewares/validation';

const usersRoutes = Router();

usersRoutes.get('/', (req, res) => {
  return res.json({ ok: true });
});

usersRoutes.post('/', registerValidation, async (req, res) => {
  try {
    const { name, telefone, email, idade, peso, etnia, password } = req.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, telefone, email, idade, peso, etnia, password });
    // @ts-expect-error
    delete user.password;
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default usersRoutes;
