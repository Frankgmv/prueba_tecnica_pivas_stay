import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/productService.js';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Productos</h2>
      <Link to="/products/new">Nuevo Producto</Link>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
            <Link to={`/products/${p.id}/edit`}>Editar</Link>
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
