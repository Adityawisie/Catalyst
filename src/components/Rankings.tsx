import { Logo } from "./Logo";
import { Section } from "./Section";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const rankings = [
  { rank: "1", stage: "3", name: "Punit Nagar", awg: "580" }, { rank: "2", stage: "2", name: "Ahmed Heights", awg: "850" },
  { rank: "3", stage: "2", name: "Shivam Avenue", awg: "830" }, { rank: "4", stage: "1", name: "Aditya Apartments", awg: "1100" },
  { rank: "5", stage: "1", name: "Sunshine Heights", awg: "1080" },
];

export function Rankings() {
  return (
    <Section id="rankings" className="bg-catalyst-light pb-10 lg:pb-12" bgVector="/images/bg-vector-rankings.svg" bgVectorOpacity={0.5}>
      <h2 className="section-title text-catalyst-dark">Rankings</h2>
      <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
        <div className="self-start overflow-hidden rounded-2xl border-2 border-catalyst-dark bg-catalyst-light shadow-xl">
          <p className="border-b-2 border-catalyst-dark bg-catalyst-dark/5 px-5 py-4 text-center text-lg font-bold text-catalyst-dark">Month</p>
          <div className="grid grid-cols-4 gap-1 p-3">{months.map((month) => <span key={month} aria-current={month === "JUL" ? "date" : undefined} className={`rounded-lg px-1 py-3 text-center text-sm font-semibold sm:text-base ${month === "JUL" ? "bg-catalyst-green text-catalyst-dark shadow-md" : "text-catalyst-dark"}`}>{month}</span>)}</div>
        </div>
        <div className="min-w-0 overflow-hidden rounded-2xl border-2 border-catalyst-dark bg-catalyst-light shadow-xl">
          <div className="w-full overflow-x-auto"><table className="w-full min-w-[34rem] border-collapse text-center text-catalyst-dark"><caption className="sr-only">Society waste generation rankings for July</caption><thead className="bg-catalyst-dark/5"><tr>{["Rank", "Stage", "Name", "AWG"].map((header) => <th key={header} scope="col" className="border-b-2 border-r-2 border-catalyst-dark px-4 py-4 text-base font-bold last:border-r-0">{header}</th>)}</tr></thead><tbody>{rankings.map((row) => <tr key={row.rank} className="transition-colors hover:bg-catalyst-green/5"><td className="border-b-2 border-r-2 border-catalyst-dark px-4 py-4 font-semibold">{row.rank}</td><td className="border-b-2 border-r-2 border-catalyst-dark px-4 py-4 font-semibold">{row.stage}</td><th scope="row" className="border-b-2 border-r-2 border-catalyst-dark px-4 py-4 font-semibold">{row.name}</th><td className="border-b-2 border-catalyst-dark px-4 py-4 font-semibold">{row.awg}</td></tr>)}</tbody></table></div>
        </div>
      </div>
      <footer id="register" className="mx-auto mt-20 max-w-6xl border-t border-catalyst-dark/15 pt-10">
        <Logo variant="footer" />
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xl font-bold leading-tight tracking-tight text-catalyst-dark/60 sm:text-2xl">Portal for Waste Management<br />&amp; Societal Benefits</p>
          <div className="sm:text-right"><p className="text-lg font-semibold text-catalyst-dark/70">Made by students of SAL Education.</p><p className="mt-3 text-sm font-medium uppercase tracking-widest text-catalyst-dark/40">Thank you</p></div>
        </div>
      </footer>
    </Section>
  );
}
