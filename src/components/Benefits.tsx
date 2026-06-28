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
      <h2 className="lg:absolute lg:top-[50px] lg:left-[788px] w-full lg:w-[344px] text-center text-5xl md:text-7xl lg:text-[90px] leading-none font-semibold text-catalyst-dark z-10">
        Benefits
      </h2>

      <div className="flex flex-col lg:block items-center gap-20 lg:gap-0 mt-20 lg:mt-0 px-6 lg:px-0 z-10">
        {stages.map((item, index) => (
          <div key={item.stage} className="flex flex-col items-center lg:block w-full">
            {/* Stage Header */}
            <div 
              className="flex items-center gap-4 lg:absolute lg:top-[283px]"
              style={{ 
                // @ts-ignore
                "--desktop-left": `${300 + index * 450}px`,
                left: "var(--desktop-left)"
              }}
            >
              <span className="text-3xl md:text-5xl lg:text-[60px] leading-none font-semibold text-catalyst-dark">
                Stage
              </span>
              <div className="flex h-12 w-12 md:h-16 md:w-16 lg:h-[75px] lg:w-[75px] items-center justify-center rounded-full bg-catalyst-green shadow-md">
                <span className="text-2xl md:text-4xl lg:text-[50px] leading-none font-extrabold text-catalyst-dark">
                  {item.stage}
                </span>
              </div>
            </div>

            {/* Redeems Text */}
            <p
              className="lg:absolute lg:top-[383px] w-full lg:w-[320px] whitespace-pre-line text-center text-lg md:text-2xl lg:text-[28px] leading-[1.3] font-semibold text-catalyst-dark/60 mt-6 lg:mt-0"
              style={{ 
                // @ts-ignore
                "--desktop-left": `${276 + index * 450}px`,
                left: "var(--desktop-left)"
              }}
            >
              {item.redeems}
            </p>

            {/* Benefits List */}
            <div
              className="lg:absolute lg:top-[500px] w-full lg:w-[320px] text-left text-base md:text-xl lg:text-[26px] leading-[1.5] font-medium text-catalyst-dark/80 mt-8 lg:mt-0"
              style={{ 
                // @ts-ignore
                "--desktop-left": `${263 + index * 450}px`,
                left: "var(--desktop-left)"
              }}
            >
              <ul className="list-none space-y-4 lg:space-y-6">
                {item.benefits.split("\n\n").map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-catalyst-green mt-1.5 font-black text-2xl lg:text-3xl select-none">•</span>
                    <span className="text-pretty">{benefit.replace(/^\s*-\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="lg:absolute lg:top-[837px] lg:left-[585px] w-full lg:w-[750px] text-center text-sm md:text-lg lg:text-[24px] leading-relaxed font-semibold text-catalyst-dark/60 italic mt-20 lg:mt-0 px-6">
        AWG = Average Waste Generation per person per day.
      </p>

      {/* Decorative Blob */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[710px] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
