import type { Metadata } from "next";
import Image from "next/image";
import { HeroInner } from "../components/HeroInner";

export const metadata: Metadata = {
  title: "Commercial Generator Service",
  description:
    "Commercial generator installation, maintenance, service, and repair in Cross Plains, Indiana and the surrounding region.",
};

export default function CommercialPage() {
  return (
    <>
      <HeroInner title="Commercial Generator Service, Maintenance and Repair in Cross Plains, Indiana" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-body-gray">
            Genset Tech is your premier destination for full-service commercial
            generator solutions in Cross Plains, Indiana, and the surrounding
            region. With years of experience in the industry, we specialize in
            providing comprehensive services for all your commercial power
            systems needs. From expert installation to meticulous repair, our
            dedicated team ensures that your business remains powered and
            operational at all times. Trust Genset Tech for reliable commercial
            generator installation, repair, and maintenance services tailored to
            meet the unique needs of your business. Let us handle your power
            needs so you can focus on running your business smoothly.
          </p>

          <h2 className="mt-12 text-3xl font-black text-dark-navy">
            Commercial Generator Installation
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                alt: "Commercial Cummins generator installed outside a building",
                src: "/image1.jpeg",
              },
              {
                alt: "Commercial standby generator equipment installed on a concrete pad",
                src: "/image4.jpeg",
              },
              {
                alt: "Genset Tech generator installation equipment on site",
                src: "/IMG_0433.jpeg",
              },
            ].map((image) => (
              <div
                className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="h-64 w-full object-cover"
                  height={330}
                  src={image.src}
                  width={480}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
