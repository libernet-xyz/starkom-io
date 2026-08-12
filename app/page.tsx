import Link from "next/link";

import { HeroVisual } from "./hero-visual";

const CONTACT = "mailto:alr@libernet.xyz";
const LIBERNET = "https://libernet.xyz";
const GITHUB = "https://github.com/libernet-xyz";

const shell = "mx-auto w-full max-w-[1240px] px-6 md:px-10";
const pill =
  "bg-starkom-ink text-starkom-panel-ink inline-block rounded-full px-[22px] py-[11px] text-[0.82rem] font-medium no-underline transition-opacity hover:opacity-80";
const inlineLink =
  "text-white/90 underline underline-offset-[3px] transition-colors hover:text-starkom-accent";

/** Quantum circuit: two wires, a gate, and a CNOT. */
function CircuitIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M1 7h30M1 16h30M1 25h30" opacity=".3" />
      <rect x="6" y="2.5" width="9" height="9" rx="2" />
      <circle cx="23" cy="16" r="2.1" fill="currentColor" stroke="none" />
      <path d="M23 16v5.9" />
      <circle cx="23" cy="25" r="3.1" />
      <path d="M19.9 25h6.2M23 21.9v6.2" />
    </svg>
  );
}

/** Modular blocks, one still in progress. */
function ModulesIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="11" height="11" rx="2.5" />
      <rect x="18.5" y="2.5" width="11" height="11" rx="2.5" />
      <rect x="2.5" y="18.5" width="11" height="11" rx="2.5" />
      <rect x="18.5" y="18.5" width="11" height="11" rx="2.5" opacity=".35" />
      <path d="M13.5 8h5M8 13.5v5" opacity=".55" strokeLinecap="round" />
    </svg>
  );
}

/** Commit graph with a branch. */
function BranchIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="5.5" r="3" />
      <circle cx="9" cy="26.5" r="3" />
      <circle cx="23" cy="12" r="3" />
      <path d="M9 8.5v15" />
      <path d="M9 17c0-5 4.5-5 11-5" />
    </svg>
  );
}

function Detail({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/15 pt-[22px]">
      <span className="text-starkom-accent mb-4 block h-[34px] w-[34px] [&>svg]:block [&>svg]:h-full [&>svg]:w-full">
        {icon}
      </span>
      <p className="text-[0.92rem] leading-[1.65] text-white/60">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <nav className={`${shell} flex items-center justify-between gap-5 py-7`}>
        <Link
          href="/"
          className="font-display text-starkom-ink text-[1.05rem] tracking-[-0.02em] no-underline"
        >
          Starkom
        </Link>
        <a href={CONTACT} className={pill}>
          Get in touch
        </a>
      </nav>

      <section
        className={`${shell} grid items-center gap-8 pt-10 pb-16 md:grid-cols-2 md:gap-14 md:pb-24`}
      >
        <div>
          <h1 className="font-display mb-[22px] max-w-[560px] text-[clamp(2.2rem,3.6vw,3.1rem)] leading-[1.08] tracking-[-0.015em]">
            Quantum Resistant
            <br />
            zkSTARK Engine
          </h1>
          <p className="max-w-[460px] text-[1.02rem] leading-[1.6] text-white/60">
            Starkom is an advanced, quantum-resistant, natively recursive
            zkSTARK engine, and the cryptographic backbone of{" "}
            <a
              href={LIBERNET}
              target="_blank"
              rel="noopener"
              className={inlineLink}
            >
              Libernet
            </a>
            .
          </p>
        </div>

        <div className="order-first md:order-none">
          <HeroVisual label="Starkom" />
        </div>
      </section>

      <section className={`${shell} pb-16 md:pb-24`}>
        <div className="grid gap-7 md:grid-cols-3 md:gap-5">
          <Detail icon={<CircuitIcon />}>
            Starkom uses PLONKish arithmetization on top of a DEEP-FRI
            polynomial commitment scheme.
          </Detail>
          <Detail icon={<ModulesIcon />}>
            Starkom is primarily written in Rust and is highly modular. Its EVM
            verifier is written in Solidity and JavaScript bindings are being
            developed.
          </Detail>
          <Detail icon={<BranchIcon />}>
            Starkom is under active development by the Libernet team.{" "}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener"
              className={inlineLink}
            >
              All the code lives on GitHub
            </a>
            .
          </Detail>
        </div>
      </section>

      <section className={`${shell} pb-20 text-center md:pb-28`}>
        <a href={CONTACT} className={pill}>
          Get in touch
        </a>
      </section>

      <footer className="mt-auto border-t border-white/10 py-6">
        <div
          className={`${shell} flex flex-col items-center justify-between gap-2.5 text-center sm:flex-row sm:text-left`}
        >
          <Link
            href="/"
            className="font-display text-starkom-ink text-[1.05rem] tracking-[-0.02em] no-underline"
          >
            Starkom
          </Link>
          <span className="text-[0.78rem] text-white/35">© 2026 Starkom.</span>
        </div>
      </footer>
    </>
  );
}
