"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  const value =
    clean.length === 3
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

export default function HomeClient() {
  const gatewaysSectionRef = useRef<HTMLElement | null>(null);
  const gatewayImageRef = useRef<HTMLDivElement | null>(null);
  const firstContactFieldRef = useRef<HTMLInputElement | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

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

  useEffect(() => {
    if (!isContactOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    const frame = window.requestAnimationFrame(() => {
      firstContactFieldRef.current?.focus();
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isContactOpen]);

  const openContactForm = () => {
    setIsContactOpen(true);
  };

  const closeContactForm = () => {
    setIsContactOpen(false);
  };

  const handleContactChange = (
    field: "name" | "company" | "email" | "message",
    value: string
  ) => {
    setContactForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `NordiQ Blue enquiry from ${contactForm.name.trim() || "website visitor"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${contactForm.name.trim() || "-"}`,
        `Company: ${contactForm.company.trim() || "-"}`,
        `Email: ${contactForm.email.trim() || "-"}`,
        "",
        "Message:",
        contactForm.message.trim() || "-",
      ].join("\n")
    );

    window.location.href = `mailto:info@nordiqblue.com?subject=${subject}&body=${body}`;
    setIsContactOpen(false);
  };

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
          <div className="hero-header">
            <a href="#" className="hero-home-link" aria-label="NordiQ Blue home">
              <Image
                src="/nordiqblue-logo-cropped.png"
                alt="NordiQ Blue"
                className="hero-logo"
                width={496}
                height={174}
                priority
              />
            </a>

            <nav className="hero-top-nav" aria-label="Section navigation">
              {sectionJumpLinks.map((item) => (
                <a key={item.href} href={item.href} className="hero-top-nav-pill">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <Reveal className="hero-inner">
            <div className="hero-kicker">NORDIC INTELLIGENCE FOR BLUE INNOVATION</div>

            <h1 className="hero-title">
              Building gateways for <span>blue innovation</span>
            </h1>

            <p className="hero-copy">
              We design gateway models, ecosystem structures, and collaborative frameworks that help ocean innovation connect, evolve, and scale with Nordic clarity.
            </p>

            <div className="hero-actions">
              <a href="#what-we-build" className="secondary-cta">
                Explore the ecosystem
                <span aria-hidden>→</span>
              </a>
              <button
                type="button"
                className="secondary-cta cta-button cta-strong"
                onClick={openContactForm}
              >
                How you connect
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="what-we-build" className="section section-dark">
        <div className="shell">
          <Reveal className="section-heading center">
            <div className="eyebrow eyebrow-ice">WHAT WE BUILD</div>
            <h2 className="title title-center">
              The enabling structures of <span className="ice-word">blue</span> innovation
            </h2>
            <p className="section-copy center-copy">
              We design and deliver the structures, programmes, and tools that enable blue
              innovation ecosystems, founders, and partners to connect, build capability, and
              scale with confidence.
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
            <div className="eyebrow eyebrow-gold">HOW WE CREATE VALUE</div>
            <h2 className="title split-title">
              One platform. <span className="gold-word">Multiple pathways to impact.</span>
            </h2>
            <p className="section-copy split-copy-text">
              NordiQ Blue brings together gateway design, innovation programmes, executive
              education, validation tools, and digital infrastructure in one connected model. This
              allows founders, partners, and institutions to engage through different entry points
              while benefiting from a shared strategic foundation.
            </p>

            <div className="bullet-list">
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Multiple entry points, one strategic model</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Designed for collaboration and capability-building</span>
              </div>
              <div className="bullet-item">
                <span className="bullet-dot" aria-hidden />
                <span>Built to support scaling across gateways</span>
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
                <div className="eyebrow eyebrow-ice">GATEWAYS</div>
                <h2 className="title split-title">
                  Regional gateways. <span className="ice-word">Shared momentum.</span>
                </h2>
                <p className="section-copy split-copy-text">
                  Ocean Community activates regional gateway communities, relationships, and founder
                  engagement. NordiQ Blue provides the programmes, tools, and enabling structures
                  that help those gateways operate, connect, and grow. Together, they create a
                  model in which community fuels innovation and strategic infrastructure helps it
                  scale.
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
                          <span
                            className={
                              item.status === "CONSORTIUM" || item.status === "IN DEVELOPMENT"
                                ? "status-pill gold"
                                : "status-pill ice"
                            }
                          >
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

      <section id="founders" className="section section-dark founders-section">
        <div className="shell">
          <Reveal className="section-heading center narrow" delay={0.02}>
            <div className="eyebrow eyebrow-ice">FOUNDING LEADERSHIP</div>
            <h2 className="title title-center founder-title">
              Built by leaders with deep roots in innovation, strategy, and the blue economy
            </h2>
            <p className="section-copy center-copy founder-intro">
              NordiQ Blue is shaped by leaders who combine strategic vision, operational
              experience, ecosystem-building capability, and a shared commitment to accelerating
              ocean-positive innovation.
            </p>
          </Reveal>

          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={founder.name} className="founder-grid-item">
                <Reveal className="founder-reveal" delay={0.08 + index * 0.08}>
                  <article className="founder-card">
                    <div className="founder-top">
                      <div className="founder-photo-shell">
                        <div
                          className="founder-photo-ring"
                          style={{ ["--founder-position" as string]: founder.imagePosition }}
                        >
                          <Image
                            src={founder.image}
                            alt={founder.imageAlt}
                            className="founder-photo"
                            fill
                            sizes="(max-width: 760px) 180px, 220px"
                          />
                        </div>
                      </div>
                      <div className="founder-heading">
                        <div className="founder-name">{founder.name}</div>
                        <div className="founder-role">{founder.role}</div>
                      </div>
                    </div>

                    <div className="founder-copy">
                      {founder.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section section-dark work-section">
        <div className="shell">
          <Reveal className="section-heading center narrow" delay={0.02}>
            <div className="eyebrow eyebrow-gold">How we work</div>
            <h2 className="title title-center">
              Designed for trusted collaboration
            </h2>
            <p className="section-copy center-copy">
              NordiQ Blue combines strategic design, programme delivery, digital infrastructure, and licensing models in a way that makes collaboration clear, scalable, and low-friction across gateways and partners.
            </p>
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

      {isContactOpen && (
        <div
          className="contact-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeContactForm();
            }
          }}
        >
          <div className="contact-shell">
            <button type="button" className="contact-back cta-button" onClick={closeContactForm}>
              <span aria-hidden>←</span>
              Back
            </button>

            <div className="contact-panel">
              <div className="contact-panel-header">
                <div className="eyebrow eyebrow-ice">How you connect</div>
                <h2 id="contact-title" className="contact-title">
                  How you connect
                </h2>
                <p className="contact-copy">
                  Tell us about your programme, partnership, gateway, or ocean innovation idea and
                  we&apos;ll continue the conversation with you directly.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-field-grid">
                  <label className="contact-field">
                    <span>Name*</span>
                    <input
                      ref={firstContactFieldRef}
                      type="text"
                      value={contactForm.name}
                      onChange={(event) => handleContactChange("name", event.target.value)}
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Company</span>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(event) => handleContactChange("company", event.target.value)}
                      autoComplete="organization"
                    />
                  </label>

                  <label className="contact-field">
                    <span>Email*</span>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(event) => handleContactChange("email", event.target.value)}
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Message*</span>
                    <textarea
                      value={contactForm.message}
                      onChange={(event) => handleContactChange("message", event.target.value)}
                      rows={6}
                      required
                    />
                  </label>
                </div>

                <div className="contact-actions-bar">
                  <button type="submit" className="contact-submit cta-button">
                    Send message
                  </button>
                  <p className="contact-note">
                    This opens your email app with the message pre-filled to info@nordiqblue.com.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <footer id="contact" className="footer">
        <div className="shell footer-shell">
          <Reveal className="footer-grid" delay={0.02}>
            <div>
              <a href="#" className="footer-logo-link" aria-label="NordiQ Blue home">
                <Image
                  src="/nordiqblue-logo-cropped.png"
                  alt="NordiQ Blue"
                  className="footer-logo"
                  width={496}
                  height={174}
                />
              </a>
              <div className="footer-brand-lines">
                <p className="footer-copy">Building gateways for blue innovation.</p>
                <p className="footer-copy footer-copy-secondary">
                  Based in Stockholm. Working across regional gateways.
                </p>
              </div>
            </div>

            <div>
              <div className="footer-heading">Explore</div>
              <div className="footer-links">
                <a href="#what-we-build">What we build</a>
                <a href="#how-we-work">How we work</a>
                <a href="#gateways">Gateways</a>
                <a href="#founders">Leadership</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">Contact</div>
              <div className="footer-links">
                <span>Stockholm, Sweden</span>
                <a href="mailto:info@nordiqblue.com">info@nordiqblue.com</a>
                <span>LinkedIn</span>
              </div>
            </div>
          </Reveal>

        </div>
      </footer>
    </main>
  );
}

const sectionJumpLinks = [
  { href: "#what-we-build", label: "Why we build" },
  { href: "#how-we-work", label: "How we work" },
  { href: "#founders", label: "Who we are" },
  { href: "#ecosystem", label: "How we collaborate" },
  { href: "#contact", label: "How you connect" },
];

const capabilities = [
  {
    icon: "↗",
    title: "Gateway Models",
    desc: "Structured gateway models for ecosystem activation across sectors, geographies, and partner networks.",
  },
  {
    icon: "▣",
    title: "Innovation Programmes",
    desc: "Programmes that support founders, startups, and ecosystem actors through innovation, collaboration, and venture progression.",
  },
  {
    icon: "☰",
    title: "Executive Education",
    desc: "Learning formats that build capability in blue innovation, systems thinking, and ecosystem development.",
  },
  {
    icon: "◇",
    title: "Validation & Health Checks",
    desc: "Assessment tools for evaluating founder and startup readiness, resilience, and growth potential.",
  },
  {
    icon: "▥",
    title: "Digital Ecosystem Platforms",
    desc: "Digital systems that connect actors, opportunities, knowledge, and programme delivery across the ecosystem.",
  },
  {
    icon: "◎",
    title: "Delivery & Licensing Models",
    desc: "Structured models for delivery, replication, licensing, and pathways into pilots and test-bed environments.",
  },
];

const ecosystemLayers = [
  {
    title: "Gateway Design",
    sub: "Structured entry points for innovation across sectors, geographies, and partner ecosystems.",
    pill: "ENTRY",
    pillClass: "status-pill soft",
  },
  {
    title: "Programmes & Education",
    sub: "Innovation programmes and executive learning formats that build capability and momentum.",
    pill: "CAPABILITY",
    pillClass: "status-pill gold",
  },
  {
    title: "Validation & Platform Tools",
    sub: "Assessment frameworks and digital systems that support readiness, connection, and progression.",
    pill: "ENABLING",
    pillClass: "status-pill ice",
  },
  {
    title: "Delivery & Scaling Models",
    sub: "Structured pathways for collaboration, replication, licensing, and growth across real-world contexts.",
    pill: "SCALING",
    pillClass: "status-pill soft",
  },
];

const gateways = [
  {
    title: "Southern Gateway",
    location: "Lisbon, Portugal",
    status: "ACTIVE",
    body: "Ocean Community activates the regional network, partner relationships, and founder community. NordiQ Blue strengthens the gateway through programmes, tools, and enabling structures for innovation and growth.",
    tag1: "ATLANTIC",
    tag2: "COMMUNITY-LED",
  },
  {
    title: "Nordic Gateway",
    location: "Stockholm, Sweden",
    status: "ACTIVE",
    body: "Ocean Community helps build regional connection and ecosystem presence, while NordiQ Blue contributes strategic models, programme formats, and platform capacity to support long-term development.",
    tag1: "NORDIC",
    tag2: "STRATEGIC",
  },
  {
    title: "Eastern Mediterranean Gateway",
    location: "Izmir, Türkiye",
    status: "IN DEVELOPMENT",
    body: "A collaborative gateway model where regional partnerships, challenge-based innovation, and enabling structures can come together to address place-based blue economy opportunities.",
    tag1: "CONSORTIUM",
    tag2: "REGIONAL COLLABORATION",
  },
];

const rimmieBlackwhiteDataUri = "data:image/png;base64,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";

const founders = [
  {
    name: "Cecilia Hjertzell",
    role: "Chair, Nordics",
    image: "/founders/cecilia-hjertzell.jpg",
    imageAlt: "Portrait of Cecilia Hjertzell",
    imagePosition: "center 26%",
    paragraphs: [
      "Cecilia Hjertzell brings broad board-level and entrepreneurial experience across global industries, with a strong grounding in sustainability, strategy, and long-term value creation.",
    ],
  },
  {
    name: "Susanne Wedin Schildt",
    role: "Founder · Ecosystem Builder · Strategic Lead",
    image: "/founders/susanne-wedin-schildt.jpg",
    imageAlt: "Portrait of Susanne Wedin Schildt",
    imagePosition: "center 22%",
    paragraphs: [
      "Susanne Wedin Schildt brings deep experience in innovation, partnerships, founder support, and international ecosystem development, with a strong focus on accelerating ocean-positive ventures and collaborative models.",
    ],
  },
  {
    name: "Rimmie Duraisamy",
    role: "Innovation Programme Lead",
    image: rimmieBlackwhiteDataUri,
    imageAlt: "Portrait of Rimmie Duraisamy",
    imagePosition: "center center",
    paragraphs: [
      "Rimmie Duraisamy brings engineering, programme, and innovation experience that strengthens NordiQ Blue’s work at the intersection of ecosystem development, emerging technologies, and real-world blue economy challenges.",
    ],
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
    title: "Clarity by design",
    desc: "Clear structures, defined roles, and practical delivery models that make collaboration easier across partners and gateways.",
    bullets: ["Clear structures", "Defined roles", "Practical delivery models"],
  },
  {
    icon: "◫",
    title: "Shared infrastructure",
    desc: "Digital systems, evaluation tools, and operational frameworks that support consistency, learning, and ecosystem growth.",
    bullets: ["Digital systems", "Evaluation tools", "Operational frameworks"],
  },
  {
    icon: "▭",
    title: "Built to scale",
    desc: "Licensing, replication pathways, and adaptable programme formats that help successful models travel across contexts.",
    bullets: ["Licensing pathways", "Replication models", "Adaptable programme formats"],
  },
];

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: `
    radial-gradient(circle at top, ${rgba(palette.iceBlue, 0.08)} 0%, transparent 34%),
    radial-gradient(circle at 20% 18%, ${rgba(palette.fjordBlue, 0.16)} 0%, transparent 28%),
    linear-gradient(180deg, ${palette.deepNavy} 0%, ${rgba(palette.nordicBlue, 0.96)} 22%, ${rgba(
      palette.deepNavy,
      0.98
    )} 58%, ${palette.deepNavy} 100%)
  `,
  color: palette.white,
  position: "relative",
  fontFamily:
    'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
    font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    background: linear-gradient(180deg, ${palette.deepNavy} 0%, ${palette.nordicBlue} 100%);
    font-family: Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    font-family: inherit;
  }

  .page-root {
    min-height: 100vh;
    overflow: visible;
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
    background: radial-gradient(circle, ${rgba(palette.scandiBlue, 0.22)} 0%, ${rgba(
  palette.scandiBlue,
  0
)} 70%);
  }

  .page-radial-b {
    width: 680px;
    height: 680px;
    right: -220px;
    top: 22vh;
    background: radial-gradient(circle, ${rgba(palette.iceBlue, 0.14)} 0%, ${rgba(
  palette.iceBlue,
  0
)} 72%);
  }

  .page-radial-c {
    width: 640px;
    height: 640px;
    left: 15%;
    bottom: -260px;
    background: radial-gradient(circle, ${rgba(palette.sandBeige, 0.09)} 0%, ${rgba(
  palette.sandBeige,
  0
)} 72%);
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
    padding: 36px 0 24px;
    border-bottom: 1px solid ${rgba(palette.white, 0.05)};
  }

  .hero-shell {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 18px;
    padding-inline: clamp(24px, 4vw, 68px);
  }

  .hero-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(36px, 5vw, 88px);
    position: relative;
    z-index: 3;
  }

  .hero-home-link {
    display: inline-flex;
    align-items: flex-start;
    flex: 0 0 auto;
  }

  .hero-top-nav {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 780px;
    margin: 0 0 0 auto;
    position: relative;
    z-index: 3;
    padding-top: 8px;
    transform: translateY(6px);
  }

  .hero-top-nav-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    color: ${rgba(palette.white, 0.92)};
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    white-space: nowrap;
    transition:
      transform 0.25s ease,
      color 0.25s ease,
      opacity 0.25s ease;
    opacity: 0.86;
  }

  .hero-top-nav-pill:hover {
    transform: translateY(-1px);
    color: ${palette.white};
    opacity: 1;
  }

  .hero-inner {
    text-align: center;
    width: min(980px, 100%);
    position: relative;
    z-index: 3;
    align-self: center;
    margin-top: -6px;
    padding: 56px 28px 48px;
    border-radius: 34px;
    background: linear-gradient(180deg, ${rgba(palette.deepNavy, 0.18)} 0%, ${rgba(
  palette.deepNavy,
  0.32
)} 100%);
    border: 1px solid ${rgba(palette.white, 0.06)};
    box-shadow: 0 30px 90px ${rgba(palette.deepNavy, 0.30)}, inset 0 1px 0 ${rgba(
  palette.white,
  0.05
)};
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
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.28)} 0%, ${rgba(
  palette.deepNavy,
  0.34
)} 26%, ${rgba(palette.deepNavy, 0.76)} 68%, ${palette.deepNavy} 100%),
      linear-gradient(120deg, ${rgba(palette.nordicBlue, 0.36)} 0%, ${rgba(
  palette.fjordBlue,
  0.12
)} 42%, ${rgba(palette.sandBeige, 0.08)} 100%),
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
      radial-gradient(circle at 50% 54%, ${rgba(palette.iceBlue, 0.14)} 0%, ${rgba(
  palette.iceBlue,
  0
)} 34%),
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
    background: radial-gradient(circle, ${rgba(palette.iceBlue, 0.18)} 0%, ${rgba(
  palette.iceBlue,
  0
)} 70%);
    opacity: 0.45;
  }

  .hero-mist-b {
    width: 50vw;
    height: 28vw;
    right: -6%;
    bottom: 20%;
    background: radial-gradient(circle, ${rgba(palette.sandBeige, 0.10)} 0%, ${rgba(
  palette.sandBeige,
  0
)} 68%);
    opacity: 0.24;
  }

  .hero-wave {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    border-radius: 50% 50% 0 0;
    filter: blur(10px);
    background: linear-gradient(
      90deg,
      ${rgba(palette.iceBlue, 0.03)} 0%,
      ${rgba(palette.iceBlue, 0.18)} 50%,
      ${rgba(palette.iceBlue, 0.03)} 100%
    );
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

  .hero-logo {
    display: block;
    width: min(320px, 28vw);
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

  .hero-actions > * {
    flex: 0 0 268px;
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

  .cta-button {
    appearance: none;
    cursor: pointer;
    font: inherit;
    text-align: center;
  }

  .cta-strong {
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  .contact-overlay {
    position: fixed;
    inset: 0;
    z-index: 90;
    display: grid;
    place-items: center;
    padding: 24px;
    overflow-y: auto;
    background:
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.78)} 0%, ${rgba(
  palette.deepNavy,
  0.9
)} 100%),
      radial-gradient(circle at top, ${rgba(palette.iceBlue, 0.16)} 0%, ${rgba(
  palette.iceBlue,
  0
)} 42%);
    backdrop-filter: blur(20px);
  }

  .contact-shell {
    width: min(880px, 100%);
    display: grid;
    gap: 22px;
  }

  .contact-back {
    justify-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${rgba(palette.white, 0.88)};
    font-size: 1rem;
    font-weight: 600;
  }

  .contact-panel {
    border-radius: 34px;
    padding: 38px;
    background:
      linear-gradient(180deg, ${rgba(palette.iceBlue, 0.08)} 0%, ${rgba(
  palette.white,
  0.03
)} 100%),
      ${rgba(palette.deepNavy, 0.62)};
    border: 1px solid ${rgba(palette.iceBlue, 0.14)};
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.05)},
      0 34px 90px ${rgba(palette.deepNavy, 0.45)};
  }

  .contact-panel-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 28px;
  }

  .contact-title {
    margin: 0;
    font-size: clamp(2.4rem, 5vw, 3.5rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
    color: ${rgba(palette.white, 0.97)};
    font-weight: 500;
  }

  .contact-copy {
    margin: 18px auto 0;
    max-width: 620px;
    color: ${rgba(palette.white, 0.96)};
    font-size: 1.02rem;
    line-height: 1.75;
  }

  .contact-form {
    display: grid;
    gap: 24px;
  }

  .contact-field-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .contact-field {
    display: grid;
    gap: 10px;
  }

  .contact-field-full {
    grid-column: 1 / -1;
  }

  .contact-field span {
    color: ${rgba(palette.white, 0.96)};
    font-size: 0.98rem;
    font-weight: 600;
  }

  .contact-field input,
  .contact-field textarea {
    width: 100%;
    border: 1px solid ${rgba(palette.iceBlue, 0.16)};
    border-radius: 18px;
    padding: 16px 18px;
    background: ${rgba(palette.white, 0.06)};
    color: ${rgba(palette.white, 0.96)};
    outline: none;
    font: inherit;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  .contact-field textarea {
    min-height: 180px;
    resize: vertical;
  }

  .contact-field input::placeholder,
  .contact-field textarea::placeholder {
    color: ${rgba(palette.lightGray, 0.42)};
  }

  .contact-field input:focus,
  .contact-field textarea:focus {
    border-color: ${rgba(palette.iceBlue, 0.46)};
    box-shadow: 0 0 0 4px ${rgba(palette.iceBlue, 0.12)};
    background: ${rgba(palette.white, 0.08)};
  }

  .contact-actions-bar {
    display: grid;
    gap: 12px;
  }

  .contact-submit {
    width: 100%;
    min-height: 60px;
    border: 1px solid ${rgba(palette.iceBlue, 0.82)};
    border-radius: 18px;
    background: ${palette.iceBlue};
    color: ${palette.deepNavy};
    font-size: 1rem;
    font-weight: 800;
    box-shadow: 0 18px 48px ${rgba(palette.iceBlue, 0.18)};
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      filter 0.25s ease;
  }

  .contact-submit:hover {
    transform: translateY(-2px);
    filter: brightness(1.02);
  }

  .contact-note {
    margin: 0;
    color: ${rgba(palette.lightGray, 0.62)};
    font-size: 0.92rem;
    line-height: 1.6;
    text-align: center;
  }

  .section {
    position: relative;
    z-index: 1;
  }

  .hero + .section,
  .section + .section,
  .section + .footer {
    margin-top: 15px;
  }

  .section-dark {
    padding: 110px 0 20px;
    background: linear-gradient(
      180deg,
      ${rgba(palette.deepNavy, 0)} 0%,
      ${rgba(palette.deepNavy, 0.18)} 28%,
      ${rgba(palette.deepNavy, 0.44)} 100%
    );
  }

  .compact-top {
    padding-top: 70px;
  }

  .work-section {
    padding-top: 90px;
    padding-bottom: 20px;
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
    align-items: stretch;
  }

  .service-grid > div,
  .service-card-wrap {
    height: 100%;
  }

  .service-card,
  .work-card,
  .programme-panel,
  .stack-row-card {
    position: relative;
    background:
      linear-gradient(180deg, ${rgba(palette.iceBlue, 0.05)} 0%, ${rgba(
  palette.white,
  0.025
)} 100%),
      ${rgba(palette.white, 0.012)};
    border: 1px solid ${rgba(palette.iceBlue, 0.1)};
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.04)},
      0 22px 60px ${rgba(palette.deepNavy, 0.35)};
    backdrop-filter: blur(16px);
  }

  .service-card {
    min-height: 360px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    padding: 38px;
  }

  .service-icon {
    width: 64px;
    height: 64px;
    display: inline-grid;
    place-items: center;
    border-radius: 18px;
    background: linear-gradient(180deg, ${rgba(palette.iceBlue, 0.15)} 0%, ${rgba(
  palette.iceBlue,
  0.08
)} 100%);
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
    padding: 110px 0 20px;
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
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.04)} 0%, ${rgba(
  palette.deepNavy,
  0.16
)} 100%),
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
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.02)} 0%, ${rgba(
  palette.deepNavy,
  0.18
)} 100%);
    pointer-events: none;
  }

  .gateway-visual-glow {
    position: absolute;
    inset: auto -12% -12% -12%;
    height: 32%;
    background: radial-gradient(circle at 50% 0%, ${rgba(
  palette.iceBlue,
  0.18
)} 0%, ${rgba(palette.iceBlue, 0)} 72%);
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

  .founders-section {
    padding-top: 96px;
  }

  .founder-title {
    max-width: 980px;
    margin-inline: auto;
  }

  .founder-intro {
    max-width: 860px;
  }

  .founders-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
  }

  .founder-grid-item,
  .founder-reveal {
    height: 100%;
  }

  .founder-card {
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    padding: 28px;
    position: relative;
    background:
      linear-gradient(180deg, ${rgba(palette.iceBlue, 0.06)} 0%, ${rgba(
  palette.white,
  0.02
)} 100%),
      ${rgba(palette.white, 0.012)};
    border: 1px solid ${rgba(palette.iceBlue, 0.1)};
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.04)},
      0 22px 60px ${rgba(palette.deepNavy, 0.35)};
    backdrop-filter: blur(16px);
    overflow: hidden;
  }

  .founder-card::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${rgba(palette.iceBlue, 0.34)} 24%,
      ${rgba(palette.sandBeige, 0.24)} 76%,
      transparent 100%
    );
  }

  .founder-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }

  .founder-photo-shell {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .founder-photo-ring {
    position: relative;
    width: min(220px, 100%);
    aspect-ratio: 1 / 1;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid ${rgba(palette.iceBlue, 0.22)};
    box-shadow:
      inset 0 1px 0 ${rgba(palette.white, 0.08)},
      0 20px 54px ${rgba(palette.deepNavy, 0.34)};
    background:
      linear-gradient(180deg, ${rgba(palette.iceBlue, 0.18)} 0%, ${rgba(
  palette.white,
  0.06
)} 100%),
      ${rgba(palette.deepNavy, 0.36)};
  }

  .founder-photo-ring::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, ${rgba(palette.deepNavy, 0.04)} 0%, ${rgba(
  palette.deepNavy,
  0.16
)} 100%),
      radial-gradient(circle at 50% 10%, ${rgba(palette.white, 0.1)} 0%, transparent 45%);
    pointer-events: none;
  }

  .founder-photo {
    object-fit: cover;
    object-position: var(--founder-position, center center);
    filter: grayscale(1) contrast(1.04) brightness(0.98);
  }

  .founder-heading {
    align-self: stretch;
  }

  .founder-name {
    font-size: 1.34rem;
    line-height: 1.16;
    font-weight: 700;
    color: ${rgba(palette.white, 0.96)};
    letter-spacing: -0.03em;
  }

  .founder-role {
    margin-top: 8px;
    font-size: 0.94rem;
    line-height: 1.5;
    color: ${rgba(palette.sandBeige, 0.9)};
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .founder-copy {
    display: grid;
    gap: 14px;
  }

  .founder-copy p {
    margin: 0;
    color: ${rgba(palette.lightGray, 0.76)};
    font-size: 0.98rem;
    line-height: 1.72;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
    align-items: stretch;
    grid-auto-rows: 1fr;
  }

  .work-grid > div,
  .work-grid > div > .reveal {
    height: 100%;
  }

  .work-card {
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 28px;
    padding: 34px;
  }

  .mini-bullets {
    margin-top: auto;
    padding-top: 24px;
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
    padding: 0 0 56px;
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
  }

  .footer-logo-link {
    display: inline-block;
    margin-bottom: 18px;
  }

  .footer-logo {
    display: block;
    width: min(220px, 100%);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 10px 28px ${rgba(palette.deepNavy, 0.22)});
  }

  .footer-brand-lines {
    display: grid;
    gap: 10px;
  }

  .footer-copy {
    margin: 0;
    max-width: 420px;
    color: ${rgba(palette.lightGray, 0.78)};
    line-height: 1.8;
    font-size: 1.02rem;
  }

  .footer-copy-secondary {
    color: ${rgba(palette.lightGray, 0.64)};
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
    color: ${rgba(palette.lightGray, 0.74)};
    font-size: 1rem;
    line-height: 1.6;
  }

  .footer-links a:hover {
    color: ${palette.iceBlue};
  }


  @media (max-width: 1120px) {
    .hero-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .hero-top-nav {
      width: 100%;
      gap: 18px;
      justify-content: flex-start;
      max-width: none;
      margin: 0;
      padding-top: 0;
      transform: none;
    }

    .hero-top-nav-pill {
      font-size: 0.96rem;
    }

    .contact-panel {
      padding: 30px;
    }

    .contact-field-grid {
      grid-template-columns: 1fr;
    }

    .service-grid,
    .work-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .founders-grid {
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
    .contact-overlay {
      padding: 16px 12px;
      align-items: start;
    }

    .contact-shell {
      width: 100%;
      gap: 14px;
    }

    .contact-panel {
      padding: 24px 18px 20px;
      border-radius: 24px;
    }

    .contact-title {
      font-size: clamp(2rem, 10vw, 2.7rem);
    }

    .contact-back {
      font-size: 0.95rem;
    }

    .contact-field input,
    .contact-field textarea {
      border-radius: 16px;
      padding: 14px 16px;
    }

    .contact-submit {
      min-height: 56px;
      border-radius: 16px;
    }

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

    .hero-header {
      gap: 14px;
    }

    .hero-top-nav {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 18px;
      max-width: none;
      margin: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 4px;
      transform: none;
      scrollbar-width: none;
    }

    .hero-top-nav::-webkit-scrollbar {
      display: none;
    }

    .hero-top-nav-pill {
      padding: 0;
      font-size: 0.95rem;
      flex: 0 0 auto;
    }

    .hero-logo {
      width: min(250px, 60vw);
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
    .work-grid,
    .founders-grid {
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

    .service-card {
      min-height: auto;
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

  }
`;
