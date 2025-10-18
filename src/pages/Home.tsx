import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroBanner from '@/assets/hero-banner.jpg';
import mensCollection from '@/assets/mens-collection.jpg';
import womensCollection from '@/assets/womens-collection.jpg';
import kidsCollection from '@/assets/kids-collection.jpg';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your Style with FashionHub
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Explore our exclusive collection of trendy clothing for men, women, and kids.
            </p>
            <Link to="/men">
              <Button variant="hero" size="lg" className="text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men's Category */}
          <Link to="/men" className="group relative overflow-hidden rounded-lg h-[400px]">
            <img
              src={mensCollection}
              alt="Men's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">Men</h3>
                <p className="text-white/90 mb-4">Explore collection</p>
                <Button variant="hero" size="sm">
                  Shop Men
                </Button>
              </div>
            </div>
          </Link>

          {/* Women's Category */}
          <Link to="/women" className="group relative overflow-hidden rounded-lg h-[400px]">
            <img
              src={womensCollection}
              alt="Women's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">Women</h3>
                <p className="text-white/90 mb-4">Explore collection</p>
                <Button variant="hero" size="sm">
                  Shop Women
                </Button>
              </div>
            </div>
          </Link>

          {/* Kids Category */}
          <Link to="/kids" className="group relative overflow-hidden rounded-lg h-[400px]">
            <img
              src={kidsCollection}
              alt="Kids Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">Kids</h3>
                <p className="text-white/90 mb-4">Explore collection</p>
                <Button variant="hero" size="sm">
                  Shop Kids
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/men">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
