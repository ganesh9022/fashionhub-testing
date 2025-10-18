import { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
              -{product.discount}%
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product.description}
          </p>
          
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            {product.discount ? (
              <>
                <span className="text-lg font-bold text-accent">
                  ₹{discountedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-foreground">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
