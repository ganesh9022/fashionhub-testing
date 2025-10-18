import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('featured');

  const categoryProducts = products.filter(
    (p) => p.category === category?.toLowerCase()
  );

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {categoryTitle}'s Collection
          </h1>
          <p className="text-muted-foreground">
            {categoryProducts.length} products available
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
