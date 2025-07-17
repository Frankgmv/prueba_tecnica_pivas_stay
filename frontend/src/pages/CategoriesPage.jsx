import { CategoryForm } from '../components/categories/CategoryForm';
import { CategoryList } from '../components/categories/CategoryList';

export default function CategoriesPage() {
  return (
    <div>
      <h1>Categorías</h1>
      <CategoryForm />
      <CategoryList />
    </div>
  );
}
