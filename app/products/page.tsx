import type { Metadata } from "next";
import Image from "next/image";
import { HeroInner } from "../components/HeroInner";
import { TodoPlaceholder } from "../components/TodoPlaceholder";

export const metadata: Metadata = {
  title: "Generator Products",
  description:
    "Preferred generator installation and service for entry-level, midsized, large, and light generator needs.",
};

const generatorTypes = [
  {
    description:
      "Perfect for small homes or essential circuits, providing basic backup power during outages.",
    label: "Entry-level home generators",
  },
  {
    description:
      "Ideal for medium-sized homes, offering more comprehensive coverage for critical systems and appliances.",
    label: "Midsized home generators",
  },
  {
    description:
      "Designed for larger homes or those with extensive power needs, these generators deliver robust performance while maintaining efficiency.",
    label: "Large & light generators",
  },
];

export default function ProductsPage() {
  return (
    <>
      <HeroInner title="Preferred Generator Installation and Service" />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h1 className="text-4xl font-black text-dark-navy">
              Types of Generator&apos;s
            </h1>
            <p className="mt-7 text-lg leading-8 text-body-gray">
              Whether you&apos;re a homeowner looking to protect your family
              from power outages or a business owner in need of reliable backup
              power solutions, we have you covered. Our experienced team
              specializes in providing expert installation and service for a wide
              range of generator types, including:
            </p>

            <ul className="mt-8 grid gap-5 text-lg leading-8 text-body-gray">
              {generatorTypes.map((item) => (
                <li className="border-l-4 border-primary pl-5" key={item.label}>
                  <strong className="font-black text-dark-navy">{item.label}:</strong>{" "}
                  {item.description}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <TodoPlaceholder>
                The bullet list continues past &quot;Large &amp; light
                generators&quot; with an &quot;Off-grid power solutions&quot;
                item and possibly more. Add the original remaining bullets here
                once provided.
              </TodoPlaceholder>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
            <Image
              alt="Generator product placeholder"
              className="h-full min-h-96 w-full object-cover"
              height={640}
              src="/generator-placeholder.png"
              width={720}
            />
          </div>
        </div>
      </section>
    </>
  );
}
