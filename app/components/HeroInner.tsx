type HeroInnerProps = {
  title: string;
};

export function HeroInner({ title }: HeroInnerProps) {
  return (
    <section className="flex min-h-[430px] items-center bg-gradient-to-br from-dark-navy via-dark-navy to-primary pb-16 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
