const testimonials = [
  {
    name: "Doug Sweeten",
    quote:
      "I was having problems with my Home Generator and called the Generator manufacturer for help/recommendations. They guided me to GenSet Tech.",
  },
  {
    name: "William 'Bill' Ellegood",
    quote:
      "I found Daren and Robert to be very professional, answering my questions and concerns in a timely manner, assisting me with ordering, etc. Daren completed the installation and thoroughly checked the technical details of the calibration, configuration and connections which gave me great confidence.",
  },
  {
    name: "Laurence Rombout",
    quote:
      "The original installer of my Kohler Whole Home Generator went out of business. I needed someone to do annual PM service and the closest was GenSet Tech. They were approximately an hour away but they had no problem driving to my home from that distance to provide the needed service.",
  },
  {
    name: "Michael Esselman",
    quote:
      "They respond to texts and emails timely. They show up when they said they would. And they get the job done right.",
  },
  {
    name: "Clifton Cofresi",
    quote:
      "Daren and his team are fast, efficient, and professional! Daren was happy to send a tech out to bring me up to speed. GenSet Tech should always be your first choice.",
  },
  {
    name: "Lou Mize",
    quote:
      "The techs were in site less than 2 hours from our call. They were pleasant and obviously knew what they were doing. Will definitely have them do our future service needs.",
  },
  {
    name: "Richard Michalack",
    quote:
      "The service technicians were very friendly and professional. Very happy with the service.",
  },
  {
    name: "Greg Ezell",
    quote:
      "Darren is a true professional. He provided me a very fair price proposal, I told him he won the bid.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="min-h-80 w-[82vw] shrink-0 snap-start rounded-md border border-white/10 bg-white/10 p-6 shadow-2xl sm:w-[56vw] lg:w-[31vw]">
      <div aria-label="5 out of 5 stars" className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            aria-hidden="true"
            className="h-5 w-5 fill-current"
            key={index}
            viewBox="0 0 20 20"
          >
            <path d="m10 1.5 2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.78l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5Z" />
          </svg>
        ))}
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{testimonial.name}</h3>
      <p className="mt-4 text-base leading-7 text-white/75">
        &quot;{testimonial.quote}&quot;
      </p>
    </article>
  );
}

export function Testimonials() {
  return (
    <section className="bg-dark-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-black text-primary">What Our</p>
          <h2 className="mt-2 text-4xl font-black text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="testimonial-marquee mt-12 overflow-hidden pb-4">
          {/* Tune the duration here if the card count or card width changes. */}
          <div className="testimonial-marquee-track flex w-max snap-x snap-mandatory">
            <div className="testimonial-marquee-group flex gap-6 pr-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="testimonial-marquee-duplicate flex gap-6 pr-6"
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`duplicate-${testimonial.name}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonials-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .testimonial-marquee-track {
          animation: testimonials-marquee 52s linear infinite;
        }

        .testimonial-marquee:hover .testimonial-marquee-track,
        .testimonial-marquee:focus-within .testimonial-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-marquee {
            overflow-x: auto;
          }

          .testimonial-marquee-track {
            animation: none;
          }

          .testimonial-marquee-duplicate {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
