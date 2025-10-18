import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order is shipped, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the Order History section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit/debit cards, UPI, net banking, and cash on delivery for orders within India.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How do I choose the right size?</AccordionTrigger>
          <AccordionContent>
            Each product page includes a detailed size guide. You can also refer to our general sizing chart available in the Size Guide section. If you're still unsure, contact our customer service team for personalized assistance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I cancel my order?</AccordionTrigger>
          <AccordionContent>
            Yes, orders can be cancelled within 24 hours of placement. After that, the order enters processing and cannot be cancelled. Please contact customer service immediately if you need to cancel.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer gift wrapping?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer complimentary gift wrapping for all orders. Simply select the gift wrap option during checkout and add a personalized message.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What is your exchange policy?</AccordionTrigger>
          <AccordionContent>
            We offer free exchanges for size or color within 30 days of delivery. The item must be in original condition with tags attached. Simply initiate an exchange request from your Order History.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>How long does delivery take?</AccordionTrigger>
          <AccordionContent>
            Standard delivery takes 5-7 business days, while express delivery takes 2-3 business days. Delivery times may vary during sale periods or festivals.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Are the product colors accurate?</AccordionTrigger>
          <AccordionContent>
            We strive to display colors as accurately as possible. However, colors may vary slightly due to monitor settings and lighting conditions. If you're unsatisfied with the color upon delivery, you can return or exchange the item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;