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
      <h2 className="absolute top-[50px] left-[774px] w-[372px] text-center text-[90px] leading-none font-semibold text-catalyst-dark">
        Rankings
      </h2>

      <div className="absolute top-[283px] left-[300px] rounded-2xl border-[3px] border-catalyst-dark bg-catalyst-light shadow-xl z-10 overflow-hidden">
        <div className="bg-catalyst-dark/5 px-5 py-4 border-b-[3px] border-catalyst-dark">
          <p className="text-center text-[22px] leading-none font-bold text-catalyst-dark">
            Month
          </p>
        </div>
        <div className="p-3">
          {months.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center">
              {row.map((month) => (
                <div
                  key={month}
                  className={`rounded-xl px-5 py-4 text-center text-[20px] leading-none font-semibold transition-all duration-300 ${
                    month === "JUL"
                      ? "bg-catalyst-green text-catalyst-dark scale-110 shadow-md"
                      : "text-catalyst-dark hover:bg-catalyst-dark/5"
                  }`}
                  style={{ minWidth: '80px' }}
                >
                  {month}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[283px] left-[773px] h-[317px] w-[5px] bg-catalyst-green shadow-[0_0_15px_rgba(30,215,96,0.3)] z-10" />

      <div className="absolute top-[283px] left-[870px] w-[750px] rounded-2xl border-[3px] border-catalyst-dark bg-catalyst-light shadow-xl z-10 overflow-hidden">
        <div className="flex bg-catalyst-dark/5 border-b-[3px] border-catalyst-dark">
          {columns.map((col) => (
            <div key={col.header} className="flex-1 px-4 py-4 text-center border-r-[3px] border-catalyst-dark last:border-r-0">
              <p className="text-[22px] leading-none font-bold text-catalyst-dark">
                {col.header}
              </p>
            </div>
          ))}
        </div>
        <div>
          {rankings.map((row, i) => (
            <div key={i} className={`flex border-b-[3px] border-catalyst-dark last:border-b-0 transition-colors hover:bg-catalyst-green/5 ${row.light ? 'bg-catalyst-green/10' : ''}`}>
              {columns.map((col) => (
                <div key={`${col.key}-${i}`} className="flex-1 px-4 py-4 text-center border-r-[3px] border-catalyst-dark last:border-r-0">
                  <p
                    className={`text-[20px] leading-none text-catalyst-dark ${
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

      <footer className="absolute top-[750px] left-[300px] w-[1320px] flex flex-col gap-[30px] z-10">
        <Logo variant="header" scale={1.75} />
        <div className="flex w-full items-end justify-between border-t border-catalyst-dark/10 pt-8">
          <p className="whitespace-pre-line text-[28px] leading-tight font-bold text-catalyst-dark/60 tracking-tight">
            Portal for Waste Management{"\n"}& Societal Benefits
          </p>
          <div className="flex flex-col items-end gap-2">
            <p className="text-right text-[26px] leading-none font-semibold text-catalyst-dark/70">
              Made by students of SAL Education.
            </p>
            <p className="text-right text-[24px] leading-none font-medium text-catalyst-dark/40 uppercase tracking-widest">
              Thank you
            </p>
          </div>
        </div>
      </footer>

      {/* Decorative Blob */}
      <div className="absolute top-[710px] left-[710px] w-[500px] h-[500px] rounded-full bg-radial-green opacity-20 blur-[120px] pointer-events-none" />
    </Section>
  );
}
