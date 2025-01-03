import {Coffee} from "lucide-react";
import {Button} from "@/components/ui/button";

export type BuyMeACoffeeButtonProps = {
  hideIcon?: boolean;
  hideText?: boolean;
};

export const BuyMeACoffeeButton = ({
  hideIcon = false,
  hideText = false,
}: BuyMeACoffeeButtonProps) => {
  if (hideIcon && hideText) {
    return null;
  }

  return (
    <Button asChild className="text-primary-foreground" variant={"default"}>
      <a
        className="inline-block"
        href="https://www.buymeacoffee.com/lumodine"
        rel="noreferrer"
        target="_blank"
      >
        {!hideIcon && <Coffee />}
        {!hideText && "Support with a coffee"}
      </a>
    </Button>
  );
};
