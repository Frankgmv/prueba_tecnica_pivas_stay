import { useForm } from 'react-hook-form';
import { createCategory, getCategory, updateCategory } from '../../services/categoryService.js';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function CategoryForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (isEdit) {
      getCategory(id).then(res => setValue('name', res.data.name));
    }
  }, [id, isEdit, setValue]);

  const onSubmit = async (data) => {
    isEdit ? await updateCategory(id, data) : await createCategory(data);
    navigate('/categories');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre:</label>
      <input {...register('name', { required: true })} />
      <button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
}
