import {
  SiMeta,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiHubspot,
  SiGooglesheets,
  SiGooglegemini,
  SiClaude,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";
import { FaFileExcel, FaLinkedin, FaLocationDot } from "react-icons/fa6";

// Brands missing from the icon set are drawn as monogram tiles.
function Mono({ text, bg, fg = "#fff" }) {
  return (
    <span
      aria-hidden
      className="grid h-full w-full place-items-center rounded-md text-[0.55em] font-black leading-none"
      style={{ background: bg, color: fg }}
    >
      {text}
    </span>
  );
}

export const toolLogos = [
  { name: "Meta Ads", icon: <SiMeta />, color: "#0866ff" },
  { name: "Google Ads", icon: <SiGoogleads />, color: "#4285f4" },
  { name: "GA4", icon: <SiGoogleanalytics />, color: "#e37400" },
  { name: "Search Console", icon: <SiGooglesearchconsole />, color: "#458cf5" },
  { name: "Tag Manager", icon: <SiGoogletagmanager />, color: "#4285f4" },
  { name: "HubSpot", icon: <SiHubspot />, color: "#ff7a59" },
  { name: "Canva", icon: <Mono text="Ca" bg="linear-gradient(135deg,#00c4cc,#7d2ae8)" />, color: "#7d2ae8" },
  { name: "CapCut", icon: <Mono text="CC" bg="#111" />, color: "#111" },
  { name: "Premiere Pro", icon: <Mono text="Pr" bg="#00005b" fg="#9999ff" />, color: "#9999ff" },
  { name: "Google Sheets", icon: <SiGooglesheets />, color: "#0f9d58" },
  { name: "Excel", icon: <FaFileExcel />, color: "#217346" },
  { name: "ChatGPT", icon: <Mono text="GPT" bg="#10a37f" />, color: "#10a37f" },
  { name: "Claude", icon: <SiClaude />, color: "#d97757" },
  { name: "Gemini", icon: <SiGooglegemini />, color: "#8e75b2" },
];

export const certLogos = {
  "HubSpot Academy": { icon: <SiHubspot />, color: "#ff7a59" },
  "Meta Blueprint": { icon: <SiMeta />, color: "#0866ff" },
  "Google Skillshop": { icon: <SiGoogleads />, color: "#4285f4" },
  "Google Analytics": { icon: <SiGoogleanalytics />, color: "#e37400" },
  "Google Tag Manager": { icon: <SiGoogletagmanager />, color: "#4285f4" },
  "Meta Pixel": { icon: <SiMeta />, color: "#0866ff" },
};

export const contactIcons = {
  email: <SiGmail style={{ color: "#ea4335" }} />,
  linkedin: <FaLinkedin style={{ color: "#0a66c2" }} />,
  whatsapp: <SiWhatsapp style={{ color: "#25d366" }} />,
  location: <FaLocationDot style={{ color: "#ea4335" }} />,
};

function LogoChip({ logo }) {
  return (
    <li
      className="logo-chip flex shrink-0 items-center gap-3 rounded-full border-2 border-ink bg-white px-5 py-2.5"
      style={{ "--brand": logo.color }}
    >
      <span className="logo-icon h-7 w-7 text-[1.75rem]">{logo.icon}</span>
      <span className="text-xs font-bold uppercase tracking-wider">{logo.name}</span>
    </li>
  );
}

/** Infinite scrolling strip of tool logos. Duplicated once for a seamless loop. */
export function LogoMarquee({ reverse = false }) {
  return (
    <div className="marquee relative w-full overflow-hidden" aria-label="Tools and platforms">
      <ul className={`marquee-track flex w-max gap-4 py-2 ${reverse ? "marquee-reverse" : ""}`}>
        {[...toolLogos, ...toolLogos].map((l, i) => (
          <LogoChip key={l.name + i} logo={l} />
        ))}
      </ul>
    </div>
  );
}

/** Static grid of tool logos with staggered hover effects. */
export function LogoGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {toolLogos.map((l) => (
        <li
          key={l.name}
          className="logo-tile flex flex-col items-center gap-2 rounded-2xl border-2 border-ink bg-white/70 p-4 text-center"
          style={{ "--brand": l.color }}
        >
          <span className="logo-icon h-10 w-10 text-[2.5rem]">{l.icon}</span>
          <span className="text-[11px] font-bold uppercase tracking-wider">{l.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function CertBadge({ label, children }) {
  const key = Object.keys(certLogos).find((k) => label.startsWith(k));
  const logo = key ? certLogos[key] : null;
  return (
    <li className="cert-badge flex items-center gap-3 rounded-xl border-2 border-ink bg-white/70 p-3" style={{ "--brand": logo?.color ?? "#1a1a1a" }}>
      <span className="logo-icon grid h-9 w-9 shrink-0 place-items-center text-[1.75rem]">
        {logo ? logo.icon : <span className="font-display text-lg">x</span>}
      </span>
      <span className="text-sm">{children}</span>
    </li>
  );
}
