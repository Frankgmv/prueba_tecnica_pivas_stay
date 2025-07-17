import { useEffect, useState } from 'react';
import { getProduct } from '../../services/productService.js';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Categoría:</strong> {product.Category?.name || product.category_id}</p>
    </div>
  );
}
