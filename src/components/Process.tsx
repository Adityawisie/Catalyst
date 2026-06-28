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
      <h2 className="absolute top-[50px] left-[791px] w-[338px] text-center text-[90px] leading-none font-semibold text-catalyst-light">
        Process
      </h2>

      <p className="absolute top-[283px] left-[418px] w-[1085px] text-center text-[30px] leading-none font-medium text-catalyst-light/80">
        Our platform simplifies the process of waste management and societal
        benefits.
      </p>

      {/* Progress Line */}
      <div className="absolute top-[466px] left-[315px] h-[5px] w-[1290px] bg-catalyst-green shadow-[0_0_20px_rgba(30,215,96,0.4)]" />

      <div className="absolute top-[391px] left-[315px] flex items-center gap-[230px] z-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-catalyst-green shadow-xl transition-transform hover:scale-110 cursor-default"
          >
            <span className="text-[100px] leading-none font-extrabold text-catalyst-dark">
              {step.number}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-[571px] left-[270px] flex items-center gap-[142px] z-10">
        {steps.map((step) => (
          <div key={step.title} className="w-[238px]">
            <h3 className="text-center text-[40px] leading-tight font-semibold tracking-[-0.05em] text-catalyst-light">
              {step.title}
            </h3>
            <p className="mt-[30px] text-center text-[24px] leading-snug font-medium text-catalyst-light/70 text-pretty">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Blob - Down at Bottom like Section 5 */}
      <div className="absolute top-[710px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
