import type { Metadata } from "next";
import Image from "next/image";
import { BrandLogoChips } from "./components/BrandLogoChips";
import { Button } from "./components/Button";
import { ContactForm } from "./components/ContactForm";
import { Testimonials } from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Generator Service and Maintenance in Southern Indiana",
  description:
    "Genset Tech keeps homes and businesses protected with generator sales, service, maintenance, inspections, repairs, load-banks, fuel samples, and oil samples.",
};

const whyItems = [
  { icon: "/icon-1.png", label: "Locally Owned & Operated" },
  { icon: "/icon-2.png", label: "Competitive Pricing" },
  { icon: "/icon-3.png", label: "Full-Service" },
];

const team = [
  {
    bio: "Daren is the new owner of GenSet Tech. He is also the current owner of the Versailles IGA and Light Tech, INC. Daren has multiple years of electrical and mechanical experience, along with customer service. He is a loving father of two kiddos, and is a local resident of Cross Plains. We are extremely thankful for his wide variety of expertise.",
    image: "/darren-headshot.jpg",
    name: "Daren Wood",
    role: "Owner",
  },
  {
    bio: "Gage is one of the service techs here at GenSet Tech. His dad, Jimmy, also is a service tech here with us. Gage is a valued employee who strives to provide excellent service to our customers, new and old.",
    image: "/gage-headshot.png",
    name: "Gage Clark",
    role: "Service Tech",
  },
  {
    bio: "Jimmy, along side his son, is our other service tech. Jimmy is an amazing father, and a fabulous employee. He is a shining example of what quality service should represent.",
    image: "/jimmy-headshot.png",
    name: "Jimmy Clark",
    role: "Service Tech",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-dark-navy pb-20 pt-40 text-white">
        <Image
          alt="Generator equipment in the field"
          className="object-cover object-[34%_18%] sm:object-[42%_24%] lg:object-center"
          fill
          priority
          sizes="100vw"
          src="/hero-home.png"
        />
        <div className="absolute inset-0 bg-dark-navy/70" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8">
          <div>
            <p className="text-sm font-black text-primary sm:text-base">
              Proudly Serving the Midwest for Over 20 years
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              At Genset Tech, our{" "}
              <span className="relative inline-block whitespace-nowrap">
                #1 Goal
                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-primary" />
              </span>{" "}
              is to keep your home and business protected and your family calm
              before, during and after the storm!
            </h1>
            <Button className="mt-8" href="/commercial">
              Learn More
            </Button>
          </div>

          <div className="rounded-md border border-white/15 bg-dark-navy/70 p-5 shadow-2xl backdrop-blur sm:p-7">
            <ContactForm idPrefix="home" variant="home" />
          </div>
        </div>
      </section>

      <section className="bg-dark-navy py-10 sm:py-12">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <BrandLogoChips />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base font-black text-primary">Welcome To</p>
          <h2 className="mt-3 text-4xl font-black text-dark-navy sm:text-5xl">
            Genset Tech, Inc!
          </h2>
          <p className="mt-6 text-lg leading-8 text-body-gray">
            We are a locally owned generator servicing business that has been up
            and operating for 20 years. We sell residential and commercial
            generators, as well as provide preventative maintenance, inspections,
            repairs, fuel / oil samples, load-banks, etc. We are a licensed
            distributor for Cummins and Kohler. Our mission is to keep the lights
            on and to make sure no one is left in the dark.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-dark-navy">
            Why Choose Us
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyItems.map((item) => (
              <div className="text-center" key={item.label}>
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
                  <Image alt="" height={74} src={item.icon} width={74} />
                </div>
                <h3 className="mt-5 text-xl font-black text-dark-navy">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black uppercase text-dark-navy">
            Meet The Team
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {team.map((member) => (
              <article
                className="rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm"
                key={member.name}
              >
                <Image
                  alt={`${member.name}, ${member.role}`}
                  className="mx-auto h-44 w-44 rounded-full object-cover"
                  height={220}
                  src={member.image}
                  width={220}
                />
                <h3 className="mt-6 text-2xl font-black text-dark-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-base leading-7 text-body-gray">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
