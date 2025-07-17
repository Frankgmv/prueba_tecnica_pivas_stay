import { useForm } from 'react-hook-form';
import { createProduct, getProduct, updateProduct } from '../../services/productService.js';
import { getCategories } from '../../services/categoryService.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
    if (isEdit) {
      getProduct(id).then(res => {
        const { name, description, price, category_id } = res.data;
        setValue('name', name);
        setValue('description', description);
        setValue('price', price);
        setValue('category_id', category_id);
      });
    }
  }, [id, isEdit, setValue]);

  const onSubmit = async (data) => {
    isEdit ? await updateProduct(id, data) : await createProduct(data);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre:</label>
      <input {...register('name', { required: true })} />

      <label>Descripción:</label>
      <textarea {...register('description', { required: true })} />

      <label>Precio:</label>
      <input type="number" step="0.01" {...register('price', { required: true, min: 0 })} />

      <label>Categoría:</label>
      <select {...register('category_id', { required: true })}>
        <option value="">Seleccione</option>
        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}
