export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }[];
}

export interface AccessLog {
  id: string;
  adminName: string;
  adminEmail: string;
  customerEmail: string;
  orderId: string;
  accessDate: string;
  action: string;
}