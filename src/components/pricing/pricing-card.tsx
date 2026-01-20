import {Check} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export type Variant = {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  isSubscription: boolean;
  interval: string | null;
  intervalCount: number | null;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  variants: Variant[];
};

export type PricingCardProps = {
  product: Product;
};

const getIntervalLabel = (interval: string | null, intervalCount: number | null) => {
  if (!interval) return "";
  const count = intervalCount || 1;
  if (interval === "month") return count === 1 ? "/mo" : `/${count} months`;
  if (interval === "year") return count === 1 ? "/yr" : `/${count} years`;
  if (interval === "week") return count === 1 ? "/wk" : `/${count} weeks`;
  if (interval === "day") return count === 1 ? "/day" : `/${count} days`;
  return "";
};

export const PricingCard = ({product}: PricingCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border bg-card text-card-foreground shadow p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        {product.description && (
          <p
            className="text-sm text-muted-foreground mt-2"
            dangerouslySetInnerHTML={{__html: product.description}}
          />
        )}
      </div>

      <div className="grow">
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Unlimited menus</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Multi-language support</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Custom themes & fonts</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>QR code generation</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Analytics & insights</span>
          </li>
        </ul>

        <div className="space-y-3 mb-6">
          {product.variants.map((variant) => (
            <div
              key={variant.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div>
                <p className="font-medium">{variant.name}</p>
                <p className="text-sm text-muted-foreground">
                  {variant.priceFormatted}
                  {variant.isSubscription && getIntervalLabel(variant.interval, variant.intervalCount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button asChild className="w-full" size="lg">
        <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`}>
          Get Started
        </Link>
      </Button>
    </div>
  );
};
