import { Category } from '../models/index.js';

export const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

export const getCategoryById = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  category ? res.json(category) : res.status(404).json({ message: 'Categoría no encontrada' });
};

export const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(201).json(category);
};

export const updateCategory = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.update(req.body);
    res.json(category);
  } else {
    res.status(404).json({ message: 'Categoría no encontrada' });
  }
};

export const deleteCategory = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.destroy();
    res.json({ message: 'Categoría eliminada' });
  } else {
    res.status(404).json({ message: 'Categoría no encontrada' });
  }
};
