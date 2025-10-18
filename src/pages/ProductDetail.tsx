import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Product not found</h2>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: 'Please select size and color',
        description: 'Choose a size and color before adding to cart.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.discount && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-lg px-4 py-2">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              {product.discount ? (
                <>
                  <span className="text-4xl font-bold text-accent">
                    ₹{discountedPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-2xl text-muted-foreground line-through">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-foreground">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Select Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className="min-w-[60px]"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Select Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? 'default' : 'outline'}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Stock Status */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Availability:</span>
                <Badge variant={product.inStock ? 'default' : 'destructive'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
