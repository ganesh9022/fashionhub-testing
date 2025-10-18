const CustomerService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-6">Customer Service</h1>
      <div className="prose max-w-none text-muted-foreground">
        <p className="text-lg mb-4">
          Welcome to FashionHub Customer Service. We're here to help you with any questions or concerns.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-6 mb-4">Our Support Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
        <p>Saturday: 10:00 AM - 4:00 PM IST</p>
        <p>Sunday: Closed</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6 mb-4">How We Can Help</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Order tracking and status updates</li>
          <li>Product information and sizing guidance</li>
          <li>Return and exchange assistance</li>
          <li>Payment and billing inquiries</li>
          <li>Technical support</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerService;