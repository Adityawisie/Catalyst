import { Section } from "./Section";

const steps = [
  {
    number: "1",
    title: "Register easily",
    description: "Chairman share the details with us about the society.",
  },
  {
    number: "2",
    title: "Share results",
    description: "Waste collector share the waste generation data everyday.",
  },
  {
    number: "3",
    title: "Gain stage",
    description: "We give you a stage based on waste generation data.",
  },
  {
    number: "4",
    title: "Enjoy benefits",
    description: "Experience an organized set of benefits as a result.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      className="bg-catalyst-dark"
      bgVector="/images/bg-vector-process.svg"
      bgVectorTop={710}
      bgVectorLeft={710}
      bgVectorOpacity={0.1}
    >
      <h2 className="lg:absolute lg:top-[50px] lg:left-[791px] w-full lg:w-[338px] text-center text-5xl md:text-7xl lg:text-[90px] leading-none font-semibold text-catalyst-light z-10">
        Process
      </h2>

      <p className="lg:absolute lg:top-[283px] lg:left-[418px] w-full lg:w-[1085px] text-center text-xl md:text-2xl lg:text-[30px] leading-none font-medium text-catalyst-light/80 z-10 mt-12 lg:mt-0 px-6">
        Our platform simplifies the process of waste management and societal benefits.
      </p>

      {/* Desktop Progress Line */}
      <div className="hidden lg:block absolute top-[466px] left-[315px] h-[5px] w-[1290px] bg-catalyst-green shadow-[0_0_20px_rgba(30,215,96,0.4)]" />

      {/* Steps Container */}
      <div className="flex flex-col lg:block items-center gap-16 lg:gap-0 mt-20 lg:mt-0 px-6 lg:px-0 z-10">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col lg:block items-center">
            {/* Step Number Bubble */}
            <div
              className={`flex h-32 w-32 lg:h-[150px] lg:w-[150px] items-center justify-center rounded-full bg-catalyst-green shadow-xl transition-transform hover:scale-110 cursor-default lg:absolute lg:top-[391px]`}
              style={{ 
                // @ts-ignore
                "--desktop-left": `${315 + index * 380}px`,
                left: "var(--desktop-left)"
              }}
            >
              <span className="text-6xl lg:text-[100px] leading-none font-extrabold text-catalyst-dark">
                {step.number}
              </span>
            </div>

            {/* Step Text Content */}
            <div 
              className="w-full lg:w-[238px] lg:absolute lg:top-[571px] mt-6 lg:mt-0"
              style={{ 
                // @ts-ignore
                "--desktop-left": `${270 + index * 380}px`,
                left: "var(--desktop-left)"
              }}
            >
              <h3 className="text-center text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold tracking-[-0.05em] text-catalyst-light">
                {step.title}
              </h3>
              <p className="mt-4 lg:mt-[30px] text-center text-lg md:text-xl lg:text-[24px] leading-snug font-medium text-catalyst-light/70 text-pretty">
                {step.description}
              </p>
            </div>
            
            {/* Mobile Connecting Line */}
            {index < steps.length - 1 && (
              <div className="lg:hidden w-1 h-12 bg-catalyst-green/30 mt-8" />
            )}
          </div>
        ))}
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[710px] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
