import { Section } from "./Section";

const steps = [
  { number: "1", title: "Register easily", description: "The chairman shares the society details with us." },
  { number: "2", title: "Share results", description: "The waste collector shares waste generation data every day." },
  { number: "3", title: "Gain stage", description: "We assign a stage based on the waste generation data." },
  { number: "4", title: "Enjoy benefits", description: "Experience an organized set of benefits as a result." },
];

export function Process() {
  return (
    <Section id="process" className="bg-catalyst-dark" bgVector="/images/bg-vector-process.svg" bgVectorOpacity={0.5}>
      <h2 className="section-title text-catalyst-light">Process</h2>
      <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-medium leading-relaxed text-catalyst-light/80 sm:text-xl lg:text-2xl">Our platform simplifies the process of waste management and societal benefits.</p>

      <ol className="relative mx-auto mt-16 grid max-w-7xl gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
        <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-1 bg-catalyst-green shadow-[0_0_20px_rgba(30,215,96,0.4)] lg:block" />
        {steps.map((step) => (
          <li key={step.number} className="relative flex min-w-0 flex-col items-center text-center">
            <div className="z-10 flex size-28 items-center justify-center rounded-full bg-catalyst-green shadow-xl transition-transform hover:scale-105 sm:size-32">
              <span className="text-6xl font-extrabold leading-none text-catalyst-dark">{step.number}</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-catalyst-light sm:text-3xl">{step.title}</h3>
            <p className="mt-4 max-w-xs text-lg font-medium leading-relaxed text-catalyst-light/70">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
