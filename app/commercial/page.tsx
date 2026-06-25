import type { Metadata } from "next";
import { HeroInner } from "../components/HeroInner";
import { TodoPlaceholder } from "../components/TodoPlaceholder";

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
          <div className="mt-6">
            <TodoPlaceholder>
              Body copy for the &quot;Commercial Generator Installation&quot; section
              and any sections below it was not captured. Add the original copy
              here once provided.
            </TodoPlaceholder>
          </div>
        </div>
      </section>
    </>
  );
}
