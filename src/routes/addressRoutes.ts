import { Router } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Address";

const addressRoutes = Router();

interface ProductDTO {
  endereco: string;
  numero: number;
  complemento: string;
  cep: number;
  cidade: string;
  estado: string;  
  user_id: string;
}

class Createaddresservice {
  public async execute({
    endereco,
    numero,
    complemento,
    cep,
    cidade,
    estado,
    user_id,
  }: ProductDTO): Promise<Product> {
    const addressRepository = getRepository(Product);

    const product = addressRepository.create({
      endereco,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      user_id,
    });

    await addressRepository.save(product);
    return product;
  }
}

addressRoutes.get("/", async (req, res) => {
  const addressRepository = getRepository(Product);
  const alladdress = await addressRepository.find();
  return res.json(alladdress);
});

addressRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const addressRepository = getRepository(Product);
  await addressRepository.delete(id);
  return res.status(204).send();
});

addressRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { endereco, numero, complemento, cep, cidade, estado } = req.body;

  const addressRepository = getRepository(Product);
  const productToUpdate = await addressRepository.findOne(id);
  addressRepository.update(id, { endereco, numero, complemento, cep, cidade, estado });
  return res.json(productToUpdate);
});

addressRoutes.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { endereco, numero, complemento, cep, cidade, estado } = req.body;
    const { id } = req.user;
    const createProduct = new Createaddresservice();
    const product = await createProduct.execute({
      endereco,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      user_id: id,
    });
    return res.json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default addressRoutes;
