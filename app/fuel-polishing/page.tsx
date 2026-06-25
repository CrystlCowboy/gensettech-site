import type { Metadata } from "next";
import { HeroInner } from "../components/HeroInner";
import { TodoPlaceholder } from "../components/TodoPlaceholder";

export const metadata: Metadata = {
  title: "Fuel Polishing",
  description:
    "Diesel fuel polishing services that mechanically filter stored fuels to remove contaminants and restore fuel reserves.",
};

export default function FuelPolishingPage() {
  return (
    <>
      <HeroInner title="Fuel Polishing" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-dark-navy">
            What is Fuel Polishing
          </h1>
          <div className="mt-7 grid gap-6 text-lg leading-8 text-body-gray">
            <p>
              Fuel polishing involves mechanically filtering stored fuels using
              one or more devices designed to remove contaminants, reducing the
              reliance on costly and often ineffective fuel additives. So, what
              does fuel polishing entail? Essentially, it&apos;s a method,
              particularly beneficial for diesel fuel, that can potentially save
              considerable expenses on fuel replacement or treatment. A thorough
              fuel polishing treatment aims to rejuvenate fuel reserves,
              restoring them to optimal condition.
            </p>
            <p>
              However, diesel fuel polishing isn&apos;t a one-step process. It
              requires multiple filtration stages to effectively cleanse stored
              fuels and enhance their performance. This is crucial for addressing
              the diverse contaminants that accumulate in biodiesel, diesel, red
              diesel, and similar fuels over time.
            </p>
            <p>
              Top-notch diesel fuel polishing systems employ either separate
              machines with different filters or a sophisticated assembly of
              diverse filter technologies within a single unit. They prioritize
              removing the densest contaminants first, especially those near the
              suction side of the internal pumping system. This is vital as
              highly pressurized contamination poses significant risks,
              particularly on the suction side of a diesel fuel tank. Hence,
              focusing the fuel polishing process on the suction side yields the
              best and safest outcomes.
            </p>
          </div>

          <div className="mt-12">
            <TodoPlaceholder>
              Confirm whether copy continues past this point and add the
              original copy here if so.
            </TodoPlaceholder>
          </div>
        </div>
      </section>
    </>
  );
}
