import { Section } from "./Section";

const stages = [
  {
    stage: "1",
    redeems: "Redeems: Monthly\nAWG: 1200gm",
    benefits:
      "  - Free medical check-up for everyone.\n\n  - 24/7 Blood Bank connectivity from near by area.",
  },
  {
    stage: "2",
    redeems: "Redeems: Half Yearly\nAWG: 900gm",
    benefits:
      "  - Open-source skill Bootcamps for industry needs.\n\n  - Career consultancy workshops for all age groups.",
  },
  {
    stage: "3",
    redeems: "Redeems: Yearly\nAWG: 600gm",
    benefits:
      "  - Job fairs for major industries.\n\n  - Business networking events for selected societies ",
  },
];

export function Benefits() {
  return (
    <Section
      id="benefits"
      className="bg-catalyst-light"
      bgVector="/images/bg-vector-benefits.svg"
      bgVectorTop={710}
      bgVectorLeft={710}
      bgVectorOpacity={0.1}
    >
      <h2 className="absolute top-[50px] left-[788px] w-[344px] text-center text-[90px] leading-none font-semibold text-catalyst-dark">
        Benefits
      </h2>

      <div className="absolute top-[283px] left-[300px] flex items-center gap-[300px] z-10">
        {stages.map((item) => (
          <div key={item.stage} className="flex items-center gap-[15px]">
            <span className="text-[60px] leading-none font-semibold text-catalyst-dark">
              Stage
            </span>
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-catalyst-green shadow-md">
              <span className="text-[50px] leading-none font-extrabold text-catalyst-dark">
                {item.stage}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[383px] left-[276px] flex w-[1368px] justify-between z-10">
        {stages.map((item) => (
          <p
            key={`redeems-${item.stage}`}
            className="w-[320px] whitespace-pre-line text-center text-[28px] leading-[1.3] font-semibold text-catalyst-dark/60"
          >
            {item.redeems}
          </p>
        ))}
      </div>

      <div className="absolute top-[500px] left-[263px] flex gap-[225px] z-10">
        {stages.map((item) => (
          <div
            key={`benefits-${item.stage}`}
            className="w-[320px] text-left text-[26px] leading-[1.5] font-medium text-catalyst-dark/80"
          >
            <ul className="list-none space-y-4">
              {item.benefits.split("\n\n").map((benefit, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-catalyst-green mt-1">•</span>
                  <span>{benefit.replace(/^\s*-\s*/, "")}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="absolute top-[837px] left-[585px] w-[750px] text-center text-[24px] leading-none font-semibold text-catalyst-dark/60 italic">
        AWG = Average Waste Generation per person per day.
      </p>

      {/* Decorative Blob - Positioned Above in Section 4 */}
      <div className="absolute top-[-250px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
