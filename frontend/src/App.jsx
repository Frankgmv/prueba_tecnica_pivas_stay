import { Routes, Route, Link } from 'react-router-dom';
import CategoryList from './components/categories/CategoryList';
import CategoryForm from './components/categories/CategoryForm';
import ProductList from './components/products/ProductList';
import ProductForm from './components/products/ProductForm';
import ProductDetail from './components/products/ProductDetail';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav>
        <Link to="/categories">Categorías</Link> |{' '}
        <Link to="/products">Productos</Link>
      </nav>

      <Routes>
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/new" element={<CategoryForm />} />
        <Route path="/categories/:id/edit" element={<CategoryForm />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/:id/edit" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
