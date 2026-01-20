import {PricingCard, Product} from "./pricing-card";

export type PricingSectionProps = {
  products: Product[];
};

export const PricingSection = ({products}: PricingSectionProps) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-lg text-primary-foreground/80">
            Choose the plan that works best for your business
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {products.map((product) => (
            <PricingCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
