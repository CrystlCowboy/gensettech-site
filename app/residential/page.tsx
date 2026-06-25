import type { Metadata } from "next";
import Image from "next/image";
import { HeroInner } from "../components/HeroInner";
import { TodoPlaceholder } from "../components/TodoPlaceholder";

export const metadata: Metadata = {
  title: "Residential Generator Service",
  description:
    "Home generator installation, routine maintenance, and generator repair for homeowners in Cross Plains, Indiana and the Midwest.",
};

export default function ResidentialPage() {
  return (
    <>
      <HeroInner title="Home Generators, Service, Maintenance and Repair" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-5xl text-lg leading-8 text-body-gray">
            At Genset Tech, we understand the critical importance of a reliable
            electrical system for homeowners in the Midwest. Our full-service
            residential generator services in Cross Plains, Indiana, ensure your
            home remains powered and secure. Whether you need professional
            generator installation, routine maintenance, or expert generator
            repair, our team is dedicated to delivering top-notch service and
            peace of mind. Trust Genset Tech to provide the highest quality care
            for your residential generator, keeping your household running
            smoothly through every season.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
                key={item}
              >
                <Image
                  alt="Residential standby generator placeholder"
                  className="h-64 w-full object-cover"
                  height={330}
                  src="/generator-placeholder.png"
                  width={480}
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <TodoPlaceholder>
              Any copy or sections below the gallery were not captured. Add the
              original copy here once provided.
            </TodoPlaceholder>
          </div>
        </div>
      </section>
    </>
  );
}
