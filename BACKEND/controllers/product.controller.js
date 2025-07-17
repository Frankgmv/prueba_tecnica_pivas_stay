import { Product, Category } from '../models/index.js';

export const getProducts = async (req, res) => {
  const products = await Product.findAll({ include: Category });
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id, { include: Category });
  product ? res.json(product) : res.status(404).json({ message: 'Producto no encontrado' });
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update(req.body);
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.json({ message: 'Producto eliminado' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};
