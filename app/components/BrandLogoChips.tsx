import Image from "next/image";
import { brandLogos } from "./siteData";

type BrandLogoChipsProps = {
  className?: string;
};

export function BrandLogoChips({ className = "" }: BrandLogoChipsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      {brandLogos.map((logo) => (
        <div
          className="flex h-20 min-w-40 items-center justify-center rounded-md bg-dark-navy px-6 py-4 md:h-24 md:min-w-56"
          key={logo.src}
        >
          <Image
            alt={`${logo.alt} logo`}
            className="h-8 w-auto max-w-full object-contain md:h-10"
            height={logo.height}
            src={logo.src}
            width={logo.width}
          />
        </div>
      ))}
    </div>
  );
}
