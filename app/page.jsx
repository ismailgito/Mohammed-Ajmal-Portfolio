import Image from "next/image";
import {
  profile,
  coreSkills,
  skillGroups,
  tools,
  experience,
  campaigns,
  education,
  certifications,
  strengths,
} from "../lib/data";
import { XMarks, SectionTitle, MacWindow, Pill, Brush } from "./components/ui";
import ContactForm from "./components/ContactForm";
import Reveal from "./components/Reveal";
import { LogoMarquee, LogoGrid, CertBadge, contactIcons } from "./components/Logos";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Campaigns", "#campaigns"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function Slide({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`slide mx-auto w-full max-w-6xl scroll-mt-20 rounded-sm p-6 sm:p-10 md:p-14 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="font-display text-xl uppercase tracking-wider">
            M. Ajmal
          </a>
          <ul className="flex gap-4 overflow-x-auto text-xs font-semibold uppercase tracking-widest">
            {nav.map(([label, href]) => (
              <li key={href} className="shrink-0">
                <a href={href} className="hover:underline underline-offset-4">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex flex-col gap-10 px-3 py-10 sm:px-6 md:gap-16 md:py-16">
        {/* Cover */}
        <Slide className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Brush className="float -right-10 -top-6 h-32 w-52 rotate-12 rounded-[60%_40%_50%_50%]" />
          <Brush className="float-slow -bottom-8 -left-12 h-24 w-56 -rotate-6 rounded-[40%_60%_50%_50%]" />
          <p className="hero-in relative font-script text-3xl md:text-4xl">Hello, I&apos;m</p>
          <h1
            className="hero-in shimmer-text relative font-display text-[clamp(2rem,8vw,5.5rem)] uppercase leading-none"
            style={{ animationDelay: "0.15s, 0s" }}
          >
            MOHAMMED AJMAL A
          </h1>
          <p
            className="hero-in relative mt-2 font-display text-xl uppercase tracking-widest md:text-3xl"
            style={{ animationDelay: "0.3s" }}
          >
            Marketer
          </p>
          <div
            className="hero-in relative mt-8 flex w-full max-w-md items-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <hr className="h-0.5 flex-1 border-0 bg-ink" />
            <span className="text-sm font-light tracking-[0.3em]">2024 — 2026</span>
            <hr className="h-0.5 flex-1 border-0 bg-ink" />
          </div>
          <p
            className="hero-in relative mt-6 max-w-xl text-sm font-medium uppercase tracking-widest"
            style={{ animationDelay: "0.6s" }}
          >
            Digital Marketing · Performance Marketing · Campaign Management
          </p>
          <div className="hero-in relative mt-8 w-full" style={{ animationDelay: "0.8s" }}>
            <LogoMarquee />
          </div>
          <XMarks className="relative mt-6" />
        </Slide>

        {/* About */}
        <Slide id="about">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <MacWindow url="about me" className="float-slow mx-auto w-full max-w-sm">
                <Image
                  src="/profile-pic.webp"
                  alt="Portrait of Mohammed Ajmal A"
                  width={410}
                  height={612}
                  priority
                  className="h-auto w-full"
                />
              </MacWindow>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
                About me
                <br />
                <span className="font-script text-6xl normal-case md:text-8xl">Ajmal</span>
              </h2>
              <div className="mt-6 space-y-3 text-sm leading-relaxed">
                {profile.summary.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <h3 className="mt-8 text-lg font-bold">Contact me</h3>
              <hr className="my-2 h-0.5 border-0 bg-ink" />
              <ul className="space-y-2 text-sm [&_svg]:text-lg [&_li>*]:flex [&_li>*]:items-center [&_li>*]:gap-3">
                <li>
                  <a href={profile.phoneHref} className="link-sweep w-fit">
                    {contactIcons.whatsapp} {profile.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} className="link-sweep w-fit">
                    {contactIcons.email} {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sweep w-fit"
                  >
                    {contactIcons.linkedin} LinkedIn
                  </a>
                </li>
                <li>
                  <span>
                    {contactIcons.location} {profile.location}
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </Slide>

        {/* Skills */}
        <Slide id="skills">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <SectionTitle script="Skills" />
              <hr className="my-4 h-0.5 border-0 bg-ink" />
              <ul className="flex flex-wrap gap-2">
                {coreSkills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <SectionTitle script="Digital" bold="Marketer" />
              <p className="mt-2 text-sm">My expertise</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-1">
                {skillGroups.map((g) => (
                  <div key={g.title} className="card-lift rounded-xl border-2 border-ink bg-white/60 p-4">
                    <h3 className="font-display text-lg uppercase tracking-wide">{g.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed">{g.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <SectionTitle script="Tools" bold="& Platforms" />
            <hr className="my-4 h-0.5 border-0 bg-ink" />
            <LogoGrid />
            <dl className="mt-8 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {tools.map((t) => (
                <div key={t.label} className="flex gap-3 border-b border-ink/30 pb-2">
                  <dt className="w-32 shrink-0 font-bold">{t.label}</dt>
                  <dd>{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Slide>

        {/* Experience */}
        <Slide id="experience">
          <SectionTitle script="Professional" bold="Experience" />
          <hr className="my-4 h-0.5 border-0 bg-ink" />
          <ol className="relative space-y-10 border-l-2 border-ink pl-6 md:pl-10">
            {experience.map((job, i) => (
              <Reveal as="li" delay={i * 150} key={job.role + job.period} className="relative">
                <span className="pulse-dot absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-ink bg-[#ffbd2e] md:-left-[49px]" />
                <p className="text-xs font-light tracking-[0.25em]">{job.period}</p>
                <h3 className="font-display text-3xl uppercase">{job.role}</h3>
                <p className="flex items-center gap-2 text-sm font-bold">
                  <span className="grid h-6 w-6 place-items-center rounded bg-ink text-[9px] font-black text-cream">
                    TVS
                  </span>
                  {job.company} · {job.place}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Slide>

        {/* Campaigns */}
        <Slide id="campaigns">
          <SectionTitle script="Selected" bold="Campaigns" />
          <hr className="my-4 h-0.5 border-0 bg-ink" />
          <div className="grid gap-6 sm:grid-cols-2">
            {campaigns.map((c, i) => (
              <Reveal as="article" delay={i * 120} key={c.title}>
                <div className="card-lift h-full rounded-2xl border-[6px] border-white bg-white p-6 shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
                  <span className="font-display text-5xl text-ink/20">0{i + 1}</span>
                  <h3 className="font-display text-2xl uppercase">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Slide>

        {/* Education */}
        <Slide id="education">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionTitle script="Education" />
              <hr className="my-4 h-0.5 border-0 bg-ink" />
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.degree}>
                    <h3 className="font-display text-2xl uppercase">{e.degree}</h3>
                    <p className="text-sm font-bold">{e.school}</p>
                    <p className="text-xs font-light tracking-widest">{e.note}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 font-script text-4xl">Strengths</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle script="Certifications" />
              <hr className="my-4 h-0.5 border-0 bg-ink" />
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <CertBadge key={c} label={c}>
                    {c}
                  </CertBadge>
                ))}
              </ul>
            </div>
          </div>
        </Slide>

        {/* Thank you */}
        <Slide id="contact" className="text-center">
          <Brush className="-left-10 -top-6 h-32 w-56 -rotate-12 rounded-[60%_40%_50%_50%]" />
          <Reveal className="relative py-10">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed">{profile.objective}</p>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,8vw,5.5rem)] uppercase leading-none">
              Thank you
            </h2>
            <p className="mt-2 font-script text-3xl md:text-4xl">Let&apos;s work together</p>
            <ContactForm />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-transparent hover:text-ink"
              >
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-ink hover:text-cream"
              >
                LinkedIn
              </a>
              <a
                href={profile.phoneHref}
                className="rounded-full border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-ink hover:text-cream"
              >
                Call
              </a>
            </div>
            <XMarks className="mx-auto mt-10 w-fit" />
            <p className="mt-6 text-[10px] font-light uppercase tracking-[0.4em]">
              Marketing Portfolio · {profile.name}
            </p>
          </Reveal>
        </Slide>
      </main>
    </>
  );
}
