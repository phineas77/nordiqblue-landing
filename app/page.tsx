"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const palette = {
  deepNavy: "#000739",
  nordicBlue: "#0F1A79",
  scandiBlue: "#1225B6",
  fjordBlue: "#2F4F8F",
  iceBlue: "#A1CAF1",
  lightGray: "#DFDFDF",
  sandBeige: "#F5DEB3",
  coralAccent: "#EB675F",
  white: "#FFFFFF",
};

const rgba = (hex: string, alpha: number) => {
  const clean = hex.replace("#", "");
  const value = clean.length === 3
    ? clean
        .split("")
        .map((char) => char + char)
        .join("")
    : clean;

  const int = parseInt(value, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal", visible ? "visible" : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
      style={{ ["--delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const gatewaysSectionRef = useRef<HTMLElement | null>(null);
  const gatewayImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = gatewaysSectionRef.current;
    const image = gatewayImageRef.current;

    if (!section || !image) return;

    let frame = 0;

    const updateImagePosition = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const maxShift = window.innerWidth < 1120 ? 0 : 285;
      const progress = Math.min(
        Math.max((viewportHeight - rect.top) / (rect.height + viewportHeight), 0),
        1
      );

      image.style.setProperty("--gateway-image-shift", `${(-maxShift * progress).toFixed(2)}px`);
      frame = 0;
    };

    const requestTick = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateImagePosition);
    };

    updateImagePosition();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);


  return (
    <main className={`${montserrat.className} page-root`} style={pageStyle}>
      <style>{globalCss}</style>

      <div className="page-radial page-radial-a" aria-hidden />
      <div className="page-radial page-radial-b" aria-hidden />
      <div className="page-radial page-radial-c" aria-hidden />
      <div className="page-grid" aria-hidden />

      <section className="hero">
        <div className="hero-backdrop" aria-hidden>
          <div className="hero-photo" />
          <div className="hero-mist hero-mist-a" />
          <div className="hero-mist hero-mist-b" />
          <div className="hero-wave hero-wave-a" />
          <div className="hero-wave hero-wave-b" />
          <div className="hero-wave hero-wave-c" />
          <div className="hero-wave hero-wave-d" />
        </div>

        <div className="shell hero-shell">
          <Reveal className="hero-inner">
            <div className="hero-brand-row">
              <img
                src="/nordiqblue-logo-cropped.png"
                alt="NordiQ Blue"
                className="hero-logo"
              />
            </div>

            <div className="hero-kicker">Commercial IP & Innovation Engine</div>

            <h1 className="hero-title">
              Professional infrastructure for the <span>Blue Economy</span>
            </h1>

            <p className="hero-copy">
              We build the frameworks, platforms, and methodologies that enable scalable ocean
              ventures—supporting Ocean Community’s multi-gateway European ecosystem through
              transparent service and licensing agreements.
            </p>

            <div className="hero-actions">
              <a href="#what-we-build" className="primary-cta">
                Explore the ecosystem
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="secondary-cta">
                Partner with us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="what-we-build" className="section section-dark">
        <div className="shell">
          <Reveal className="section-heading center">
            <div className="eyebrow eyebrow-ice">What we build</div>
            <h2 className="title title-center">
              The <span className="ice-word">Blue</span> innovation engine
            </h2>
            <p className="section-copy center-copy">
              NordiQ Blue AB owns and develops the commercial infrastructure that powers Ocean
              Community’s multi-gateway platform—while keeping legal and operational risk low.
            </p>
          </Reveal>

          <div className="service-grid">
            {capabilities.map((item, index) => (
              <div key={item.title}>
                <Reveal delay={index * 0.06} className="service-card-wrap">
                  <article className="service-card">
                  <div className="service-icon" aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-copy">{item.desc}</p>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section section-mesh">
        <div className="mesh-bg" aria-hidden />
        <div className="shell split-shell">
          <Reveal className="split-copy" delay={0.02}>
            <div className="eyebrow eyebrow-gold">Ecosystem model</div>
            <h2 className="title split-title">
              One ecosystem. <span className="gold-word">Two legal anchors.</span> One commercial
              engine.
            </h2>
            <p className="section-copy split-copy-text">
              Ocean Community operates as a mission-driven ecosystem layer across gateways. Two
              non-profit anchors (Portugal + Sweden) provide the legal foundation. NordiQ Blue AB
              provides the commercial engine and protected IP through arm’s-length, transparent
              service and licensing agreements.
            </p>

            <div className="bullet-list">
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Mission-driven ecosystem layer</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Transparent service &amp; licensing agreements</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Commercial IP &amp; engine</span>
              </div>
            </div>
          </Reveal>

          <div className="stack-list">
            {ecosystemLayers.map((item, index) => (
              <div key={item.title}>
                <Reveal delay={0.1 + index * 0.06}>
                  <article className="stack-row-card">
                  <div>
                    <div className="stack-row-title">{item.title}</div>
                    <div className="stack-row-sub">{item.sub}</div>
                  </div>
                  <span className={item.pillClass}>{item.pill}</span>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gateways" ref={gatewaysSectionRef} className="section section-dark compact-top">
        <div className="gateways-bleed">
          <Reveal className="gateway-visual-column" delay={0.02}>
            <div className="gateway-visual-frame">
              <div ref={gatewayImageRef} className="gateway-visual-image" aria-hidden />
              <div className="gateway-visual-glow" aria-hidden />
            </div>
          </Reveal>

          <div className="gateway-content-wrap">
            <div className="gateway-content-column">
              <Reveal className="split-copy" delay={0.04}>
                <div className="eyebrow eyebrow-ice">Gateways</div>
                <h2 className="title split-title">
                  Multiple regional doors, <span className="ice-word">one unified system</span>
                </h2>
                <p className="section-copy split-copy-text">
                  Gateways execute locally, adapt to regional strengths, and feed startups into a shared
                  pipeline—without owning separate IP.
                </p>
              </Reveal>

              <div className="stack-list">
                {gateways.map((item, index) => (
                  <div key={item.title}>
                    <Reveal delay={0.08 + index * 0.06}>
                      <article className="stack-row-card gateway-row">
                      <div>
                        <div className="stack-row-title">{item.title}</div>
                        <div className="stack-row-sub">{item.location}</div>
                        <p className="gateway-copy">{item.body}</p>
                      </div>
                      <div className="gateway-side">
                        <span className={item.status === "Consortium" ? "status-pill gold" : "status-pill ice"}>
                          {item.status.toUpperCase()}
                        </span>
                        <div className="gateway-tags">
                          <span>{item.tag1}</span>
                          <span>{item.tag2}</span>
                        </div>
                      </div>
                      </article>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section section-dark work-section">
        <div className="shell">
          <Reveal className="section-heading center narrow" delay={0.02}>
            <div className="eyebrow eyebrow-gold">How we work</div>
            <h2 className="title title-center">
              Built to <span className="gold-word">scale with clarity</span>
            </h2>
            <p className="section-copy center-copy">
              NordiQ Blue AB supports Ocean Community through clear service agreements. The goal is
              to build durable value and protect IP while keeping the ecosystem mission-driven and
              operationally stable.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="programme-panel-wrap">
            <div className="programme-panel">
              <div className="programme-title">Programme ownership (simplified)</div>
              <div className="programme-table">
                {programmeRows.map((row) => (
                  <div key={row.type} className="programme-row">
                    <div className="programme-type">{row.type}</div>
                    <div className="programme-values">
                      <span className="programme-chip">{row.owner}</span>
                      <span className="programme-chip soft">{row.ip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="work-grid">
            {workCards.map((item, index) => (
              <div key={item.title}>
                <Reveal delay={0.12 + index * 0.06}>
                  <article className="work-card">
                  <div className="service-icon" aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-copy">{item.desc}</p>
                  <div className="mini-bullets">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="mini-bullet">
                        <span className="mini-bullet-dot" aria-hidden />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="shell footer-shell">
          <Reveal className="footer-grid" delay={0.02}>
            <div>
              <div className="footer-brand-row">
                <img
                  src="/nordiqblue-logo-cropped.png"
                  alt="NordiQ Blue"
                  className="footer-logo"
                />
              </div>
              <p className="footer-copy">
                Strategic innovation infrastructure for the blue economy. Registered in Stockholm,
                Sweden.
              </p>
            </div>

            <div>
              <div className="footer-heading">Ecosystem</div>
              <div className="footer-links">
                <a href="https://www.oceancommunitychallenge.com/" target="_blank" rel="noreferrer">
                  Ocean Community
                </a>
                <span>Accelerator programmes</span>
                <span>Partner network</span>
                <span>Innovation platform</span>
              </div>
            </div>

            <div>
              <div className="footer-heading">Contact</div>
              <div className="footer-links">
                <span>📍 Stockholm, Sweden</span>
                <a href="mailto:info@nordiqblue.com">✉️ info@nordiqblue.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}

const capabilities = [
  {
    icon: "↗",
    title: "Accelerator Frameworks",
    desc: "Proprietary methodologies powering ocean venture acceleration across European gateways.",
  },
  {
    icon: "▣",
    title: "Digital Platform Architecture",
    desc: "Scalable ecosystem infrastructure connecting innovators, mentors, and investors.",
  },
  {
    icon: "☰",
    title: "Playbooks & Curriculum",
    desc: "Licensed learning modules and programme blueprints for ocean innovation.",
  },
  {
    icon: "◇",
    title: "IP & Licensing",
    desc: "Protected intellectual property with transparent service agreements for NGO partners.",
  },
  {
    icon: "▥",
    title: "Evaluation & Data Models",
    desc: "Investment-readiness assessment tools and impact measurement frameworks.",
  },
  {
    icon: "◎",
    title: "Corporate Innovation",
    desc: "Paid programmes connecting corporates with ocean startups and blue economy solutions.",
  },
];

const ecosystemLayers = [
  {
    title: "Ocean Community",
    sub: "Mission-driven ecosystem layer",
    pill: "ECOSYSTEM",
    pillClass: "status-pill soft",
  },
  {
    title: "OC Portugal + OC Sweden",
    sub: "Two non-profit legal anchors",
    pill: "FOUNDATION",
    pillClass: "status-pill gold",
  },
  {
    title: "NordiQ Blue AB",
    sub: "Commercial IP & engine",
    pill: "ENGINE",
    pillClass: "status-pill ice",
  },
  {
    title: "Service & licensing agreements",
    sub: "Transparent operating model",
    pill: "LOW RISK",
    pillClass: "status-pill soft",
  },
];

const gateways = [
  {
    title: "Atlantic Gateway",
    location: "Lisbon, Portugal",
    status: "Active",
    body: "Executes locally in the Atlantic region and feeds founders into a shared European pipeline.",
    tag1: "Local execution",
    tag2: "Shared pipeline",
  },
  {
    title: "Nordic–Baltic Gateway",
    location: "Stockholm, Sweden",
    status: "Active",
    body: "Nordic–Baltic entry point with strong ecosystem capabilities in sustainability and innovation.",
    tag1: "Regional strengths",
    tag2: "Gateway model",
  },
  {
    title: "Eastern Mediterranean",
    location: "Izmir, Türkiye",
    status: "Consortium",
    body: "Consortium model gateway—regional challenge execution with no separate legal burden.",
    tag1: "Consortium",
    tag2: "No legal burden",
  },
];

const programmeRows = [
  { type: "Community building", owner: "Ocean Community", ip: "OC" },
  { type: "Ocean literacy (open)", owner: "Ocean Community", ip: "OC" },
  {
    type: "Open innovation challenge",
    owner: "Ocean Community + Gateway",
    ip: "OC brand / NordiQ framework",
  },
  { type: "Accelerator methodology", owner: "Licensed to OC", ip: "NordiQ Blue" },
  { type: "Digital ecosystem platform", owner: "Provided to OC", ip: "NordiQ Blue" },
  { type: "Paid corporate programmes", owner: "NordiQ Blue", ip: "NordiQ Blue" },
];

const workCards = [
  {
    icon: "◌",
    title: "Service agreements",
    desc: "Clear delivery model for platform and execution support—transparent and scalable.",
    bullets: ["Arm’s-length agreements", "Defined deliverables", "Low legal burden for gateways"],
  },
  {
    icon: "◫",
    title: "Platform infrastructure",
    desc: "Digital architecture powering multi-gateway operations and shared pipeline workflows.",
    bullets: ["Ecosystem tooling", "Shared evaluation models", "Reliable & secure operations"],
  },
  {
    icon: "▭",
    title: "Licensing & curriculum",
    desc: "Protected methodologies and learning modules licensed via Ocean Community where relevant.",
    bullets: ["Playbooks & frameworks", "Certification programmes (paid)", "IP protection & value creation"],
  },
];

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: `
    radial-gradient(circle at top, ${rgba(palette.iceBlue, 0.08)} 0%, transparent 34%),
    radial-gradient(circle at 20% 18%, ${rgba(palette.fjordBlue, 0.16)} 0%, transparent 28%),
    linear-gradient(180deg, ${palette.deepNavy} 0%, ${rgba(palette.nordicBlue, 0.96)} 22%, ${rgba(palette.deepNavy, 0.98)} 58%, ${palette.deepNavy} 100%)
  `,
  color: palette.white,
  position: "relative",
  overflowX: "hidden",
  fontFamily: 'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const globalCss = `
  :root {
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
  }

  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: visible;
    height: auto;
    background: linear-gradient(180deg, ${palette.deepNavy} 0%, ${palette.nordicBlue} 100%);
  }

  body > div:first-child,
  #__next,
  [data-nextjs-scroll-focus-boundary] {
    height: auto !important;
    min-height: 0 !important;
    max-width: 100%;
    width: 100%;
    overflow: visible !important;
    overflow-x: visible !important;
    overflow-y: visible !important;
  }

  .page-root {
    min-height: 100vh;
    height: auto !important;
    overflow-x: hidden !important;
    overflow-y: visible !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .shell {
    width: min(1280px, calc(100% - 40px));
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .page-radial {
    position: fixed;
    border-radius: 999px;
    pointer-events: none;
    filter: blur(40px);
    z-index: 0;
  }

  .page-radial-a {
    width: 640px;
    height: 640px;
    top: -180px;
    left: -160px;
    background: radial-gradient(circle, ${rgba(palette.scandiBlue, 0.22)} 0%, ${rgba(palette.scandiBlue, 0)} 70%);
  }

  .page-radial-b {
    width: 680px;
    height: 680px;
    right: -220px;
    top: 22vh;
    background: radial-gradient(circle, ${rgba(palette.iceBlue, 0.14)} 0%, ${rgba(palette.iceBlue, 0)} 72%);
  }

  .page-radial-c {
    width: 640px;
    height: 640px;
    left: 15%;
    bottom: -260px;
    background: radial-gradient(circle, ${rgba(palette.sandBeige, 0.09)} 0%, ${rgba(palette.sandBeige, 0)} 72%);
  }

  .page-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.22;
    background-image:
      linear-gradient(${rgba(palette.white, 0.03)} 1px, transparent 1px),
      linear-gradient(90deg, ${rgba(palette.white, 0.03)} 1px, transparent 1px);
    background-size: 120px 120px;
    mask-image: linear-gradient(180deg, transparent, black 16%, black 84%, transparent);
    z-index: 0;
  }

  @supports (overflow: clip) {
    html,
    body,
    .page-root,
    .hero,
    .section,
    .footer {
      overflow-x: clip;
    }
  }

  .reveal {
    opacity: 0;
    transform: translate3d(0, 36px, 0);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
    transition-delay: var(--delay, 0s);
  }

  .reveal.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    isolation: isolate;
    padding: 48px 0 32px;
    border-bottom: 1px solid ${rgba(palette.white, 0.05)};
  }

  .hero-shell {
    display: flex;
    justify-content: center;
  }

  .hero-inner {
    text-align: center;
    width: min(980px, 100%);
    position: relative;
    z-index: 3;
    padding: 56px 28px 48px;
    border-radius: 34px;
    background: linear-gradient(180deg, ${rgba(palette.deepNavy, 0.18)} 0%, ${rgba(palette.deepNavy, 0.32)} 100%);
    border: 1px solid ${rgba(palette.white, 0.06)};
    box-shadow: 0 30px 90px ${rgba(palette.deepNavy, 0.30)}, inset 0 1px 0 ${rgba(palette.white, 0.05)};
    backdrop-filter: blur(10px);
  }

  .hero-backdrop {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
  }

  .hero-photo {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.28)} 0%, ${rgba(palette.deepNavy, 0.34)} 26%, ${rgba(palette.deepNavy, 0.76)} 68%, ${palette.deepNavy} 100%),
      linear-gradient(120deg, ${rgba(palette.nordicBlue, 0.36)} 0%, ${rgba(palette.fjordBlue, 0.12)} 42%, ${rgba(palette.sandBeige, 0.08)} 100%),
      url("/presetbase-lightroom-presets-j8_p8XtW6Pc-unsplash.jpg");
    background-size: cover;
    background-position: center center;
    filter: saturate(0.82) contrast(0.94) brightness(0.86);
    transform: scale(1.03);
  }

  .hero-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 54%, ${rgba(palette.iceBlue, 0.14)} 0%, ${rgba(palette.iceBlue, 0)} 34%),
      linear-gradient(180deg, ${rgba(palette.white, 0.06)} 0%, transparent 24%);
    mix-blend-mode: screen;
    opacity: 0.55;
  }

  .hero-mist {
    position: absolute;
    border-radius: 999px;
    filter: blur(54px);
    pointer-events: none;
  }

  .hero-mist-a {
    width: 54vw;
    height: 26vw;
    top: 14%;
    left: -4%;
    background: radial-gradient(circle, ${rgba(palette.iceBlue, 0.18)} 0%, ${rgba(palette.iceBlue, 0)} 70%);
    opacity: 0.45;
  }

  .hero-mist-b {
    width: 50vw;
    height: 28vw;
    right: -6%;
    bottom: 20%;
    background: radial-gradient(circle, ${rgba(palette.sandBeige, 0.10)} 0%, ${rgba(palette.sandBeige, 0)} 68%);
    opacity: 0.24;
  }

  .hero-wave {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    border-radius: 50% 50% 0 0;
    filter: blur(10px);
    background: linear-gradient(90deg, ${rgba(palette.iceBlue, 0.03)} 0%, ${rgba(palette.iceBlue, 0.18)} 50%, ${rgba(palette.iceBlue, 0.03)} 100%);
    border-top: 1px solid ${rgba(palette.iceBlue, 0.12)};
  }

  .hero-wave-a {
    height: 220px;
    bottom: 29%;
    transform: translateX(-50%) rotate(-2deg);
  }

  .hero-wave-b {
    height: 270px;
    bottom: 21%;
    transform: translateX(-50%) rotate(2deg);
    opacity: 0.8;
  }

  .hero-wave-c {
    height: 310px;
    bottom: 12%;
    transform: translateX(-50%) rotate(-4deg);
    opacity: 0.65;
  }

  .hero-wave-d {
    height: 330px;
    bottom: 4%;
    transform: translateX(-50%) rotate(3deg);
    opacity: 0.5;
  }

  .hero-brand-row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .hero-logo {
    display: block;
    width: min(420px, 58vw);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px ${rgba(palette.deepNavy, 0.28)});
  }

  .hero-kicker {
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: ${rgba(palette.white, 0.58)};
    margin-bottom: 18px;
  }

  .hero-title {
    margin: 0 auto;
    max-width: 1040px;
    font-size: clamp(3.6rem, 9vw, 5rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
    font-weight: 600;
    color: ${rgba(palette.white, 0.96)};
    text-wrap: balance;
  }

  .hero-title span {
    color: ${palette.iceBlue};
  }

  .hero-copy {
    width: min(860px, 100%);
    margin: 28px auto 0;
    font-size: clamp(1.05rem, 2vw, 1.32rem);
    line-height: 1.75;
    color: ${rgba(palette.lightGray, 0.78)};
    text-wrap: balance;
  }

  .hero-actions {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
  }

  .primary-cta,
  .secondary-cta {
    min-width: 268px;
    min-height: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 18px 28px;
    border-radius: 18px;
    font-size: 1rem;
    font-weight: 700;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease,
      box-shadow 0.25s ease;
  }

  .primary-cta {
    background: ${palette.iceBlue};
    color: ${palette.deepNavy};
    border: 1px solid ${rgba(palette.iceBlue, 0.8)};
    box-shadow: 0 18px 48px ${rgba(palette.iceBlue, 0.16)};
  }

  .secondary-cta {
    background: ${rgba(palette.deepNavy, 0.25)};
    color: ${rgba(palette.white, 0.92)};
    border: 1px solid ${rgba(palette.iceBlue, 0.28)};
    box-shadow: inset 0 0 0 1px ${rgba(palette.iceBlue, 0.05)};
  }

  .primary-cta:hover,
  .secondary-cta:hover {
    transform: translateY(-2px);
  }

  .section {
    position: relative;
    z-index: 1;
  }

  .section-dark {
    padding: 110px 0 0;
    background: linear-gradient(180deg, ${rgba(palette.deepNavy, 0)} 0%, ${rgba(palette.deepNavy, 0.18)} 28%, ${rgba(palette.deepNavy, 0.44)} 100%);
  }

  .compact-top {
    padding-top: 70px;
  }

  .work-section {
    padding-top: 90px;
    padding-bottom: 18px;
  }

  .section-heading {
    margin-bottom: 56px;
  }

  .section-heading.center {
    text-align: center;
    margin-inline: auto;
    max-width: 980px;
  }

  .section-heading.narrow {
    max-width: 900px;
  }

  .eyebrow {
    font-size: 0.86rem;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .eyebrow-ice {
    color: ${palette.iceBlue};
  }

  .eyebrow-gold {
    color: ${palette.sandBeige};
  }

  .title {
    margin: 0;
    font-size: clamp(2.6rem, 5vw, 4rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
    color: ${rgba(palette.white, 0.96)};
    font-weight: 500;
    text-wrap: balance;
  }

  .title-center {
    text-align: center;
  }

  .split-title {
    max-width: 760px;
  }

  .ice-word {
    color: ${palette.iceBlue};
  }

  .gold-word {
    color: ${palette.sandBeige};
  }

  .section-copy {
    margin: 22px 0 0;
    color: ${rgba(palette.lightGray, 0.68)};
    font-size: 1.15rem;
    line-height: 1.78;
  }

  .center-copy {
    width: min(860px, 100%);
    margin-left: auto;
    margin-right: auto;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .service-card,
  .work-card,
  .programme-panel,
  .stack-row-card {
    position: relative;
    background:
      linear-gradient(180deg, ${rgba(palette.iceBlue, 0.05)} 0%, ${rgba(palette.white, 0.025)} 100%),
      ${rgba(palette.white, 0.012)};
    border: 1px solid ${rgba(palette.iceBlue, 0.1)};
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.04)},
      0 22px 60px ${rgba(palette.deepNavy, 0.35)};
    backdrop-filter: blur(16px);
  }

  .service-card {
    min-height: 320px;
    border-radius: 28px;
    padding: 38px;
  }

  .service-icon {
    width: 64px;
    height: 64px;
    display: inline-grid;
    place-items: center;
    border-radius: 18px;
    background: linear-gradient(180deg, ${rgba(palette.iceBlue, 0.15)} 0%, ${rgba(palette.iceBlue, 0.08)} 100%);
    border: 1px solid ${rgba(palette.iceBlue, 0.12)};
    color: ${palette.iceBlue};
    font-size: 1.8rem;
    margin-bottom: 32px;
  }

  .card-title {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    color: ${rgba(palette.white, 0.96)};
    font-weight: 700;
    text-wrap: balance;
  }

  .card-copy {
    margin: 20px 0 0;
    font-size: 1.03rem;
    line-height: 1.8;
    color: ${rgba(palette.lightGray, 0.65)};
  }

  .section-mesh {
    padding: 110px 0 0;
  }

  .mesh-bg {
    position: absolute;
    inset: 0 0 auto 0;
    height: 100%;
    pointer-events: none;
    background:
      radial-gradient(circle at 8% 72%, ${rgba(palette.iceBlue, 0.08)} 0 14px, transparent 15px),
      radial-gradient(circle at 22% 20%, ${rgba(palette.iceBlue, 0.06)} 0 14px, transparent 15px),
      radial-gradient(circle at 47% 8%, ${rgba(palette.iceBlue, 0.05)} 0 14px, transparent 15px),
      radial-gradient(circle at 64% 21%, ${rgba(palette.iceBlue, 0.06)} 0 16px, transparent 17px),
      radial-gradient(circle at 82% 12%, ${rgba(palette.iceBlue, 0.05)} 0 16px, transparent 17px),
      radial-gradient(circle at 76% 62%, ${rgba(palette.iceBlue, 0.05)} 0 15px, transparent 16px),
      linear-gradient(115deg, transparent 0 12%, ${rgba(palette.iceBlue, 0.07)} 12.4%, transparent 12.8%),
      linear-gradient(58deg, transparent 0 39%, ${rgba(palette.iceBlue, 0.06)} 39.35%, transparent 39.7%),
      linear-gradient(90deg, transparent 0 55%, ${rgba(palette.iceBlue, 0.05)} 55.3%, transparent 55.7%);
    opacity: 0.5;
    mask-image: linear-gradient(180deg, transparent, black 16%, black 86%, transparent);
  }

  .split-shell {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
    gap: 64px;
    align-items: start;
  }

  .split-copy {
    padding-top: 10px;
  }

  .split-copy-text {
    max-width: 700px;
  }

  .bullet-list {
    margin-top: 38px;
    display: grid;
    gap: 22px;
  }

  .bullet-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    color: ${rgba(palette.white, 0.92)};
    font-size: 1.06rem;
    line-height: 1.6;
  }

  .bullet-dot,
  .mini-bullet-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: ${palette.iceBlue};
    flex: 0 0 auto;
    margin-top: 0.55rem;
    box-shadow: 0 0 0 8px ${rgba(palette.iceBlue, 0.08)};
  }

  .stack-list {
    display: grid;
    gap: 20px;
  }

  .stack-row-card {
    border-radius: 26px;
    padding: 30px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .stack-row-title {
    font-size: 1.36rem;
    line-height: 1.2;
    font-weight: 700;
    color: ${rgba(palette.white, 0.96)};
    text-wrap: balance;
  }

  .stack-row-sub {
    margin-top: 8px;
    font-size: 1.02rem;
    color: ${rgba(palette.lightGray, 0.62)};
    line-height: 1.6;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 0.86rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }

  .status-pill.ice {
    color: ${palette.iceBlue};
    border: 1px solid ${rgba(palette.iceBlue, 0.2)};
    background: ${rgba(palette.iceBlue, 0.08)};
  }

  .status-pill.gold {
    color: ${palette.sandBeige};
    border: 1px solid ${rgba(palette.sandBeige, 0.22)};
    background: ${rgba(palette.sandBeige, 0.08)};
  }

  .status-pill.soft {
    color: ${rgba(palette.white, 0.78)};
    border: 1px solid ${rgba(palette.white, 0.12)};
    background: ${rgba(palette.white, 0.05)};
  }

  .gateways-bleed {
    display: grid;
    grid-template-columns: minmax(0, 50vw) minmax(0, 1fr);
    gap: 0;
    align-items: stretch;
  }

  .gateway-visual-column {
    position: relative;
    align-self: stretch;
    min-height: 100%;
    height: 100%;
  }

  .gateway-visual-frame {
    position: relative;
    min-height: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0 34px 34px 0;
    background: ${rgba(palette.white, 0.03)};
    border: 1px solid ${rgba(palette.iceBlue, 0.1)};
    border-left: 0;
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.05)},
      0 26px 70px ${rgba(palette.deepNavy, 0.36)};
  }

  .gateway-visual-image {
    --gateway-image-shift: 0px;
    position: absolute;
    inset: -190px 0;
    background-image:
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.04)} 0%, ${rgba(palette.deepNavy, 0.16)} 100%),
      url("/antoine-boutserin-kY54CmFqgzw-unsplash.jpg");
    background-size: cover;
    background-position: center center;
    transform: translate3d(0, var(--gateway-image-shift), 0) scale(1.04);
    will-change: transform;
  }

  .gateway-visual-frame::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, ${rgba(palette.white, 0.05)} 0%, transparent 22%),
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.02)} 0%, ${rgba(palette.deepNavy, 0.18)} 100%);
    pointer-events: none;
  }

  .gateway-visual-glow {
    position: absolute;
    inset: auto -12% -12% -12%;
    height: 32%;
    background: radial-gradient(circle at 50% 0%, ${rgba(palette.iceBlue, 0.18)} 0%, ${rgba(palette.iceBlue, 0)} 72%);
    pointer-events: none;
    filter: blur(24px);
    opacity: 0.55;
  }

  .gateway-content-wrap {
    padding-left: clamp(32px, 4vw, 56px);
    padding-right: max(20px, calc((100vw - 1280px) / 2 + 20px));
  }

  .gateway-content-column {
    max-width: 860px;
    display: grid;
    gap: 28px;
  }

  .gateway-row {
    align-items: flex-start;
  }

  .gateway-copy {
    margin: 16px 0 0;
    color: ${rgba(palette.lightGray, 0.62)};
    line-height: 1.72;
    font-size: 0.98rem;
    max-width: 560px;
  }

  .gateway-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    min-width: 170px;
  }

  .gateway-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;
  }

  .gateway-tags span {
    padding: 7px 12px;
    border-radius: 999px;
    font-size: 0.82rem;
    color: ${rgba(palette.white, 0.72)};
    background: ${rgba(palette.white, 0.04)};
    border: 1px solid ${rgba(palette.white, 0.08)};
  }

  .programme-panel-wrap {
    margin-bottom: 30px;
  }

  .programme-panel {
    border-radius: 30px;
    padding: 34px;
  }

  .programme-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${rgba(palette.white, 0.96)};
    margin-bottom: 24px;
  }

  .programme-table {
    display: grid;
    gap: 0;
  }

  .programme-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    padding: 18px 0;
    border-top: 1px solid ${rgba(palette.white, 0.08)};
  }

  .programme-row:first-child {
    border-top: 0;
    padding-top: 0;
  }

  .programme-type {
    color: ${rgba(palette.white, 0.92)};
    font-weight: 600;
    line-height: 1.5;
  }

  .programme-values {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px;
  }

  .programme-chip {
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 700;
    color: ${palette.deepNavy};
    background: ${palette.iceBlue};
  }

  .programme-chip.soft {
    background: ${rgba(palette.white, 0.08)};
    color: ${rgba(palette.white, 0.85)};
    border: 1px solid ${rgba(palette.white, 0.1)};
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .work-card {
    min-height: 100%;
    border-radius: 28px;
    padding: 34px;
  }

  .mini-bullets {
    margin-top: 24px;
    display: grid;
    gap: 14px;
  }

  .mini-bullet {
    display: flex;
    gap: 14px;
    color: ${rgba(palette.white, 0.88)};
    line-height: 1.55;
    font-size: 0.98rem;
  }

  .footer {
    padding: 0px 0 18px;
    position: relative;
    background: linear-gradient(180deg, #03145a 0%, #072a8a 100%);

  }

  .footer-shell {
    border-top: 1px solid ${rgba(palette.white, 0.06)};
    padding-top: 54px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr 1fr;
    gap: 56px;
    padding-bottom: 0;
    border-bottom: 0;
  }

  .footer-brand-row {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }

  .footer-logo {
    display: block;
    width: min(320px, 100%);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 8px 24px ${rgba(palette.deepNavy, 0.22)});
  }

  .footer-copy {
    margin: 0;
    max-width: 420px;
    color: ${rgba(palette.lightGray, 0.66)};
    line-height: 1.8;
    font-size: 1.02rem;
  }

  .footer-heading {
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${rgba(palette.white, 0.95)};
    margin-bottom: 24px;
  }

  .footer-links {
    display: grid;
    gap: 16px;
    color: ${rgba(palette.lightGray, 0.72)};
    font-size: 1rem;
    line-height: 1.6;
  }

  .footer-links a:hover {
    color: ${palette.iceBlue};
  }

  
  @media (max-width: 1120px) {
    .service-grid,
    .work-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .split-shell,
    .footer-grid {
      grid-template-columns: 1fr;
    }

    .gateways-bleed {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .gateway-content-wrap {
      padding-right: 20px;
      padding-left: 20px;
    }

    .gateway-content-column {
      max-width: 100%;
    }

    .gateway-visual-frame {
      min-height: 560px;
      height: min(70vh, 720px);
      border-radius: 28px;
      border-left: 1px solid ${rgba(palette.iceBlue, 0.1)};
      margin: 0 20px;
    }

    .hero {
      min-height: auto;
      padding-top: 100px;
      padding-bottom: 70px;
    }
  }

  @media (max-width: 760px) {
    .shell {
      width: min(100% - 24px, 1280px);
    }

    .gateway-content-wrap {
      padding-right: 12px;
      padding-left: 12px;
    }

    .gateway-visual-frame {
      margin: 0 12px;
    }

    .hero-brand-row {
      margin-bottom: 20px;
    }

    .hero-logo {
      width: min(300px, 78vw);
    }

    .hero-inner {
      padding: 36px 18px 32px;
      border-radius: 24px;
    }

    .hero-title {
      font-size: clamp(2.7rem, 13vw, 3.8rem);
      line-height: 0.98;
      letter-spacing: -0.045em;
      max-width: 100%;
      overflow-wrap: break-word;
    }

    .hero-copy,
    .section-copy {
      font-size: 1rem;
      line-height: 1.72;
    }

    .hero-actions {
      gap: 14px;
    }

    .primary-cta,
    .secondary-cta {
      min-width: 100%;
      width: 100%;
    }

    .section-dark,
    .section-mesh,
    .footer {
      padding-top: 20px;
    }

    .compact-top {
      padding-top: 54px;
    }

    .service-grid,
    .work-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .service-card,
    .work-card,
    .programme-panel,
    .stack-row-card {
      padding: 24px;
      border-radius: 22px;
    }

    .stack-row-card,
    .programme-row {
      flex-direction: column;
      align-items: flex-start;
    }

    .gateway-side,
    .programme-values {
      align-items: flex-start;
      justify-content: flex-start;
    }

    .gateway-tags {
      justify-content: flex-start;
    }

    .gateway-visual-frame {
      min-height: 440px;
      border-radius: 22px;
    }

    .gateway-visual-image {
      inset: -90px 0;
    }

    .footer-grid {
      gap: 36px;
      padding-bottom: 0;
    }

    .footer-logo {
      width: min(240px, 100%);
    }
  }
`;
