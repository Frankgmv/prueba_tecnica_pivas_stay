import { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../../services/categoryService.js';
import { Link } from 'react-router-dom';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div>
      <h2>Categorías</h2>
      <Link to="/categories/new">Nueva Categoría</Link>
      <ul>
        {categories.map(c => (
          <li key={c.id}>
            {c.name}
            <Link to={`/categories/${c.id}/edit`}>Editar</Link>
            <button onClick={() => handleDelete(c.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
