import Image from "next/image";

export const BuyMeACoffeeButton = () => {
  return (
    <a
      className="inline-block"
      href="https://www.buymeacoffee.com/bilaldemir"
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt="Buy Me A Coffee"
        height={41}
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        width={160}
      />
    </a>
  );
};
