import { Order, AccessLog } from '@/types/order';

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Rajesh Kumar',
    customerEmail: 'rajesh.kumar@email.com',
    orderDate: '2025-01-15',
    totalAmount: 4598,
    status: 'delivered',
    items: [
      { productId: 'm1', productName: 'Classic Navy T-Shirt', quantity: 2, price: 899 },
      { productId: 'm2', productName: 'Slim Fit Denim Jeans', quantity: 1, price: 2499 }
    ]
  },
  {
    id: 'ORD-002',
    customerName: 'Priya Sharma',
    customerEmail: 'priya.sharma@email.com',
    orderDate: '2025-01-16',
    totalAmount: 8498,
    status: 'shipped',
    items: [
      { productId: 'w1', productName: 'Elegant Black Dress', quantity: 1, price: 3499 },
      { productId: 'w4', productName: 'Satin Evening Dress', quantity: 1, price: 5499 }
    ]
  },
  {
    id: 'ORD-003',
    customerName: 'Amit Patel',
    customerEmail: 'amit.patel@email.com',
    orderDate: '2025-01-17',
    totalAmount: 6497,
    status: 'processing',
    items: [
      { productId: 'm3', productName: 'Casual Cotton Jacket', quantity: 1, price: 3999 },
      { productId: 'k1', productName: 'Colorful Cotton T-Shirts', quantity: 2, price: 599 },
      { productId: 'k2', productName: 'Kids Denim Jeans', quantity: 1, price: 1299 }
    ]
  },
  {
    id: 'ORD-004',
    customerName: 'Sneha Reddy',
    customerEmail: 'sneha.reddy@email.com',
    orderDate: '2025-01-17',
    totalAmount: 9297,
    status: 'pending',
    items: [
      { productId: 'w2', productName: 'Floral Summer Dress', quantity: 1, price: 2799 },
      { productId: 'w3', productName: 'Classic White Blazer', quantity: 1, price: 4999 },
      { productId: 'k3', productName: 'Girls Floral Dress', quantity: 1, price: 1499 }
    ]
  },
  {
    id: 'ORD-005',
    customerName: 'Vikram Singh',
    customerEmail: 'vikram.singh@email.com',
    orderDate: '2025-01-18',
    totalAmount: 3698,
    status: 'delivered',
    items: [
      { productId: 'm4', productName: 'Premium Cotton Sweatshirt', quantity: 2, price: 1799 }
    ]
  }
];

export const accessLogs: AccessLog[] = [
  {
    id: 'LOG-001',
    adminName: 'Admin User',
    adminEmail: 'admin@fashionhub.com',
    customerEmail: 'rajesh.kumar@email.com',
    orderId: 'ORD-001',
    accessDate: '2025-01-15 10:30:00',
    action: 'Viewed order details'
  },
  {
    id: 'LOG-002',
    adminName: 'Admin User',
    adminEmail: 'admin@fashionhub.com',
    customerEmail: 'priya.sharma@email.com',
    orderId: 'ORD-002',
    accessDate: '2025-01-16 14:20:00',
    action: 'Updated order status to shipped'
  },
  {
    id: 'LOG-003',
    adminName: 'Admin User',
    adminEmail: 'admin@fashionhub.com',
    customerEmail: 'amit.patel@email.com',
    orderId: 'ORD-003',
    accessDate: '2025-01-17 09:15:00',
    action: 'Viewed order history'
  }
];