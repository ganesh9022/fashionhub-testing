const Returns = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-6">Returns & Exchanges</h1>
      <div className="prose max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Return Policy</h2>
          <p className="text-lg">
            We offer a 30-day return policy for all items in their original condition with tags attached.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">How to Return</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log in to your account and go to Order History</li>
            <li>Select the item(s) you wish to return</li>
            <li>Choose your reason for return</li>
            <li>Print the return label and attach it to the package</li>
            <li>Drop off at any courier location</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Process</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds are processed within 5-7 business days after receiving the return</li>
            <li>Original payment method will be credited</li>
            <li>Shipping charges are non-refundable</li>
            <li>Exchange is free for size/color changes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Returnable Items</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Innerwear and intimates</li>
            <li>Items marked as Final Sale</li>
            <li>Items without original tags</li>
            <li>Damaged or worn items</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Returns;