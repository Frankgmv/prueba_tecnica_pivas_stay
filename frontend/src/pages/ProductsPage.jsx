import { ProductForm } from '../components/products/ProductForm';
import { ProductList } from '../components/products/ProductList';

export default function ProductsPage() {
  return (
    <div>
      <h1>Productos</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}
