import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

export default function AppRoutes() {
  return (
    <Router>
      <nav>
        <Link to="/categories">Categorías</Link> | <Link to="/products">Productos</Link>
      </nav>
      <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}
