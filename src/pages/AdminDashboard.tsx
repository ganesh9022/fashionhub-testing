import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Package, Users, ShoppingCart, TrendingUp, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminDashboard = () => {
  const { user } = useUser();
  const isAdmin = user?.organizationMemberships?.[0]?.role === 'org:admin';

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const stats = [
    {
      title: 'Total Products',
      value: products.length,
      icon: Package,
      color: 'text-blue-500',
    },
    {
      title: 'Total Sales',
      value: '₹2,45,000',
      icon: TrendingUp,
      color: 'text-green-500',
    },
    {
      title: 'Active Users',
      value: '1,234',
      icon: Users,
      color: 'text-purple-500',
    },
    {
      title: 'Orders',
      value: '156',
      icon: ShoppingCart,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
        <Button variant="hero">
          <Plus className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.slice(0, 10).map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>₹{product.price.toLocaleString('en-IN')}</TableCell>
                  <TableCell>
                    <Badge variant={product.inStock ? 'default' : 'destructive'}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.rating || 'N/A'}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
