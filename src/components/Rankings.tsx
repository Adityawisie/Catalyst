import { Logo } from "./Logo";
import { Section } from "./Section";

const months = [
  ["JAN", "FEB", "MAR", "APR"],
  ["MAY", "JUN", "JUL", "AUG"],
  ["SEP", "OCT", "NOV", "DEC"],
];

const rankings = [
  { rank: "1", stage: "3", name: "Punit Nagar", awg: "580" },
  { rank: "2", stage: "2", name: "Ahmed Heights", awg: "850" },
  { rank: "3", stage: "2", name: "Shivam Avenue", awg: "830" },
  { rank: "4", stage: "1", name: "Aditya Apartments", awg: "1100" },
  { rank: "5", stage: "1", name: "Sunshine heights", awg: "1080", light: true },
];

const columns = [
  { header: "Rank", key: "rank" as const, left: 906 },
  { header: "Stage", key: "stage" as const, left: 1036 },
  { header: "Name", key: "name" as const, left: 1166 },
  { header: "AWG", key: "awg" as const, left: 1396 },
];

export function Rankings() {
  return (
    <Section
      id="rankings"
      className="bg-catalyst-light"
      bgVector="/images/bg-vector-rankings.svg"
      bgVectorTop={710}
      bgVectorLeft={710}
      bgVectorOpacity={0.1}
    >
      <h2 className="lg:absolute lg:top-[50px] lg:left-[774px] w-full lg:w-[372px] text-center text-5xl md:text-7xl lg:text-[90px] leading-none font-semibold text-catalyst-dark z-10">
        Rankings
      </h2>

      <div className="flex flex-col lg:block items-center lg:absolute lg:top-[283px] lg:left-[300px] w-full lg:w-auto mt-16 lg:mt-0 px-6 lg:px-0 z-10">
        <div className="rounded-2xl border-[3px] border-catalyst-dark bg-catalyst-light shadow-xl overflow-hidden w-full lg:w-auto">
          <div className="bg-catalyst-dark/5 px-5 py-4 border-b-[3px] border-catalyst-dark">
            <p className="text-center text-xl lg:text-[22px] leading-none font-bold text-catalyst-dark">
              Month
            </p>
          </div>
          <div className="p-3">
            {months.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center justify-center">
                {row.map((month) => (
                  <div
                    key={month}
                    className={`rounded-xl px-4 lg:px-5 py-3 lg:py-4 text-center text-lg lg:text-[20px] leading-none font-semibold transition-all duration-300 ${
                      month === "JUL"
                        ? "bg-catalyst-green text-catalyst-dark scale-110 shadow-md"
                        : "text-catalyst-dark hover:bg-catalyst-dark/5"
                    }`}
                    style={{ minWidth: '75px', lgMinWidth: '80px' } as any}
                  >
                    {month}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block absolute top-[283px] left-[773px] h-[317px] w-[5px] bg-catalyst-green shadow-[0_0_15px_rgba(30,215,96,0.3)] z-10" />

      {/* Rankings Table */}
      <div className="flex flex-col lg:block items-center lg:absolute lg:top-[283px] lg:left-[870px] w-full lg:w-[750px] mt-20 lg:mt-0 px-6 lg:px-0 z-10">
        <div className="rounded-2xl border-[3px] border-catalyst-dark bg-catalyst-light shadow-xl overflow-x-auto w-full lg:overflow-hidden">
          <div className="flex bg-catalyst-dark/5 border-b-[3px] border-catalyst-dark min-w-[500px] lg:min-w-0">
            {columns.map((col) => (
              <div key={col.header} className="flex-1 px-3 lg:px-4 py-4 text-center border-r-[3px] border-catalyst-dark last:border-r-0">
                <p className="text-base lg:text-[22px] leading-none font-bold text-catalyst-dark">
                  {col.header}
                </p>
              </div>
            ))}
          </div>
          <div className="min-w-[500px] lg:min-w-0">
            {rankings.map((row, i) => (
              <div key={i} className={`flex border-b-[3px] border-catalyst-dark last:border-b-0 transition-colors hover:bg-catalyst-green/5 ${row.light ? 'bg-catalyst-green/10' : ''}`}>
                {columns.map((col) => (
                  <div key={`${col.key}-${i}`} className="flex-1 px-3 lg:px-4 py-4 text-center border-r-[3px] border-catalyst-dark last:border-r-0">
                    <p
                      className={`text-base lg:text-[20px] leading-none text-catalyst-dark ${
                        row.light && col.key === "name" ? "font-medium" : "font-semibold"
                      }`}
                    >
                      {row[col.key]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="flex flex-col lg:block lg:absolute lg:top-[750px] lg:left-[300px] w-full lg:w-[1320px] gap-12 lg:gap-[30px] z-10 mt-28 lg:mt-0 px-6 lg:px-0 border-t border-catalyst-dark/10 lg:border-none pt-12 lg:pt-0 pb-12 lg:pb-0">
        <div className="flex justify-center lg:justify-start">
          <Logo variant="header" scale={1.5} />
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-end justify-between lg:border-t lg:border-catalyst-dark/10 lg:pt-8 gap-12">
          <p className="whitespace-pre-line text-center lg:text-left text-2xl md:text-3xl lg:text-[28px] leading-tight font-bold text-catalyst-dark/60 tracking-tight text-pretty">
            Portal for Waste Management{"\n"}& Societal Benefits
          </p>
          <div className="flex flex-col items-center lg:items-end gap-5">
            <p className="text-center lg:text-right text-lg md:text-xl lg:text-[26px] leading-none font-semibold text-catalyst-dark/70">
              Made by students of SAL Education.
            </p>
            <p className="text-center lg:text-right text-base lg:text-xl lg:text-[24px] leading-none font-medium text-catalyst-dark/40 uppercase tracking-widest">
              Thank you
            </p>
          </div>
        </div>
      </footer>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[710px] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-radial-green opacity-20 blur-[80px] lg:blur-[120px] pointer-events-none" />
    </Section>
  );
}
