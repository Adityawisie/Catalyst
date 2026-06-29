import { Section } from "./Section";

const stages = [
  { stage: "1", redeems: "Monthly", awg: "1200gm", benefits: ["Free medical check-up for everyone.", "24/7 blood bank connectivity from nearby areas."] },
  { stage: "2", redeems: "Half yearly", awg: "900gm", benefits: ["Open-source skill bootcamps for industry needs.", "Career consultancy workshops for all age groups."] },
  { stage: "3", redeems: "Yearly", awg: "600gm", benefits: ["Job fairs for major industries.", "Business networking events for selected societies."] },
];

export function Benefits() {
  return (
    <Section id="benefits" className="bg-catalyst-light" bgVector="/images/bg-vector-benefits.svg" bgVectorOpacity={0.5}>
      <h2 className="section-title text-catalyst-dark">Benefits</h2>
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3 lg:mt-20 lg:gap-14">
        {stages.map((item) => (
          <article key={item.stage} className="flex min-w-0 flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-semibold text-catalyst-dark sm:text-4xl">Stage</h3>
              <span className="flex size-14 items-center justify-center rounded-full bg-catalyst-green text-3xl font-extrabold text-catalyst-dark shadow-md">{item.stage}</span>
            </div>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-catalyst-dark/60">Redeems: {item.redeems}<br />AWG: {item.awg}</p>
            <ul className="mt-8 space-y-5 text-left text-lg font-medium leading-relaxed text-catalyst-dark/80">
              {item.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><span aria-hidden className="mt-0.5 text-2xl leading-none text-catalyst-green">•</span><span>{benefit}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-16 text-center text-sm font-semibold italic leading-relaxed text-catalyst-dark/60 sm:text-base">AWG = Average Waste Generation per person per day.</p>
    </Section>
  );
}
