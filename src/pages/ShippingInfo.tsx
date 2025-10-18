const ShippingInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-6">Shipping Information</h1>
      <div className="prose max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Delivery Options</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Standard Delivery</h3>
              <p>5-7 business days | ₹99</p>
              <p>Available for all locations across India</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Express Delivery</h3>
              <p>2-3 business days | ₹199</p>
              <p>Available for major cities</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Free Delivery</h3>
              <p>5-7 business days | Free on orders above ₹1,999</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders are processed within 1-2 business days</li>
            <li>Tracking information will be provided via email</li>
            <li>Delivery times may vary during peak seasons</li>
            <li>Signature may be required upon delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">International Shipping</h2>
          <p>Currently, we only ship within India. International shipping coming soon!</p>
        </section>
      </div>
    </div>
  );
};

export default ShippingInfo;