import type { CSSProperties } from "react";

export default function Home() {
  return (
    <main style={styles.main}>
      <style>{responsiveCss}</style>

      <div style={styles.backgroundGlowOne} aria-hidden />
      <div style={styles.backgroundGlowTwo} aria-hidden />

      <div style={styles.container}>
        <div style={styles.topBar}>
          <div style={styles.topBarLeft}>
            <span style={styles.topBarDot} aria-hidden />
            <span style={styles.topBarText}>
              Provided to{" "}
              <a
                href="https://www.oceancommunitychallenge.com/"
                target="_blank"
                rel="noreferrer"
                style={styles.topBarLink}
              >
                Ocean Community
              </a>
            </span>
          </div>

          <div style={styles.topBarRight}>
            <span style={styles.badgeSmall}>Commercial IP & Engine</span>
          </div>
        </div>

        <header style={styles.header}>
          <div style={styles.brand}>
            <div style={styles.logo} aria-hidden>
              ⚓
            </div>
            <div>
              <div style={styles.brandName}>NordiQ Blue AB</div>
              <div style={styles.brandSub}>Strategic innovation infrastructure</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <a href="#what-we-build" style={styles.navLink}>
              What we do
            </a>
            <a href="#ecosystem" style={styles.navLink}>
              Ecosystem
            </a>
            <a href="#gateways" style={styles.navLink}>
              Gateways
            </a>
            <a href="#how-we-work" style={styles.navLink}>
              How we work
            </a>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </nav>
        </header>

        <section style={styles.heroSection}>
          <div className="heroGrid" style={styles.heroGrid}>
            <div>
              <div style={styles.heroKickerWrap}>
                <span style={styles.heroKicker}>Commercial IP & Innovation Engine</span>
              </div>

              <h1 style={styles.h1}>
                Professional infrastructure for the{" "}
                <span style={styles.accentTeal}>Blue Economy</span>
              </h1>

              <p style={styles.lead}>
                We build the frameworks, platforms, and methodologies that enable scalable ocean
                ventures—supporting Ocean Community’s multi-gateway European ecosystem through
                transparent service and licensing agreements.
              </p>

              <div style={styles.heroCtas}>
                <a href="#ecosystem" style={styles.primaryBtn}>
                  Explore the ecosystem
                </a>
                <a href="#contact" style={styles.secondaryBtn}>
                  Partner with us
                </a>
              </div>

              <div className="heroStats" style={styles.heroStats}>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Location</div>
                  <div style={styles.statValue}>Stockholm, Sweden</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Positioning</div>
                  <div style={styles.statValue}>B2B backend & strategic entity</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statLabel}>Connection</div>
                  <div style={styles.statValueSmall}>
                    <span style={styles.miniChip}>Powered by NordiQ Blue</span>
                    <span style={styles.miniChipAlt}>Provided to Ocean Community</span>
                  </div>
                </div>
              </div>
            </div>

            <aside style={styles.heroPanel}>
              <div style={styles.heroPanelTop}>
                <div>
                  <div style={styles.panelEyebrow}>Operating model</div>
                  <div style={styles.heroPanelTitle}>One ecosystem, two legal anchors, one engine</div>
                </div>
                <div style={styles.panelBadge}>Structured for scale</div>
              </div>

              <div style={styles.stackDiagram}>
                <div style={styles.stackItemSoft}>
                  <div style={styles.stackItemLabel}>Ecosystem layer</div>
                  <div style={styles.stackItemTitle}>Ocean Community</div>
                  <div style={styles.stackItemText}>
                    Community building, ocean literacy, open innovation challenges, and gateway coordination.
                  </div>
                </div>

                <div style={styles.stackConnector}>Transparent NGO ↔ company agreements</div>

                <div style={styles.stackItemMid}>
                  <div style={styles.stackRow}>
                    <div style={styles.anchorCard}>
                      <div style={styles.anchorLabel}>Portugal</div>
                      <div style={styles.anchorTitle}>OC Portugal</div>
                    </div>
                    <div style={styles.anchorCard}>
                      <div style={styles.anchorLabel}>Sweden</div>
                      <div style={styles.anchorTitle}>OC Sweden</div>
                    </div>
                  </div>
                </div>

                <div style={styles.stackItemStrong}>
                  <div style={styles.stackItemLabelTeal}>Commercial engine</div>
                  <div style={styles.stackItemTitle}>NordiQ Blue AB</div>
                  <div style={styles.stackItemText}>
                    IP ownership, platform architecture, accelerator methodology, and paid B2B programme delivery.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="what-we-build" style={styles.section}>
          <div style={styles.sectionShell}>
            <div style={styles.sectionHeaderCenter}>
              <div style={styles.eyebrow}>What we build</div>
              <h2 style={styles.h2}>
                The innovation <span style={styles.accentTeal}>engine</span>
              </h2>
              <p style={styles.sectionSub}>
                NordiQ Blue AB owns and develops the commercial infrastructure that powers Ocean
                Community’s multi-gateway platform—while keeping legal and operational risk low.
              </p>
            </div>

            <div className="grid6" style={styles.grid6}>
              {capabilities.map((c) => (
                <div key={c.title} style={styles.card}>
                  <div style={styles.cardIcon} aria-hidden>
                    {c.icon}
                  </div>
                  <div style={styles.cardTitle}>{c.title}</div>
                  <div style={styles.cardDesc}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" style={styles.section}>
          <div style={styles.sectionShellStrong}>
            <div className="splitHeader" style={styles.sectionHeader}>
              <div>
                <div style={styles.eyebrowGold}>Ecosystem model</div>
                <h2 style={styles.h2Large}>
                  One ecosystem. <span style={styles.accentGold}>Two legal anchors.</span> One
                  commercial engine.
                </h2>
                <p style={styles.sectionSubLeft}>
                  Ocean Community operates as a mission-driven ecosystem layer across gateways. Two
                  non-profit anchors (Portugal + Sweden) provide the legal foundation. NordiQ Blue AB
                  provides the commercial engine and protected IP through arm’s-length, transparent
                  service and licensing agreements.
                </p>
              </div>

              <div style={styles.callout}>
                <div style={styles.calloutTitle}>Clear connecting points</div>
                <div style={styles.calloutRow}>
                  <span style={styles.miniChip}>Powered by NordiQ Blue</span>
                  <span style={styles.miniChipAlt}>Provided to Ocean Community</span>
                </div>
                <div style={styles.calloutText}>
                  A clearer operating model keeps the ecosystem unified while protecting IP, building
                  value, and reducing scale risk.
                </div>
              </div>
            </div>

            <div className="ecosystemGrid" style={styles.ecosystemGrid}>
              <div style={styles.layerCard}>
                <div style={styles.layerTag}>Ocean Community</div>
                <div style={styles.layerTitle}>Mission-driven ecosystem layer</div>
                <div style={styles.layerDesc}>
                  Community building, ocean literacy (open), open innovation challenges, and gateway
                  coordination across Europe.
                </div>
                <div style={styles.layerFooter}>
                  <span style={styles.pillSoft}>Connect</span>
                  <span style={styles.pillSoft}>Learn</span>
                  <span style={styles.pillSoft}>Innovate</span>
                </div>
              </div>

              <div style={styles.layerCard}>
                <div style={styles.layerTag}>Non-profit anchors</div>
                <div style={styles.layerTitle}>OC Portugal + OC Sweden</div>
                <div style={styles.layerDesc}>
                  Two separate legal entities under one ecosystem—ensuring mission alignment and a
                  stable foundation for growth.
                </div>
                <div style={styles.layerFooter}>
                  <span style={styles.pillSoftAlt}>Portugal (Lisbon)</span>
                  <span style={styles.pillSoftAlt}>Sweden (Stockholm)</span>
                </div>
              </div>

              <div style={styles.layerCardStrong}>
                <div style={styles.layerTagTeal}>NordiQ Blue AB</div>
                <div style={styles.layerTitle}>Commercial IP & engine</div>
                <div style={styles.layerDesc}>
                  Owns and develops accelerator mechanics, digital infrastructure, methodologies,
                  curriculum, and evaluation models—licensed/provided to Ocean Community.
                </div>

                <div style={styles.layerFooter}>
                  <span style={styles.pillStrong}>IP holder</span>
                  <span style={styles.pillStrong}>Platform engine</span>
                  <span style={styles.pillStrong}>B2B programmes</span>
                </div>
              </div>

              <div style={styles.layerCard}>
                <div style={styles.layerTag}>Operating model</div>
                <div style={styles.layerTitle}>Service & licensing agreements</div>
                <div style={styles.layerDesc}>
                  Arm’s-length, transparent agreements between NGOs and NordiQ Blue AB for platform,
                  execution support, and licensing—enabling scale without legal burden.
                </div>
                <div style={styles.layerFooter}>
                  <span style={styles.pillSoft}>Transparent</span>
                  <span style={styles.pillSoft}>Arm’s-length</span>
                  <span style={styles.pillSoft}>Low risk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gateways" style={styles.section}>
          <div style={styles.sectionShell}>
            <div style={styles.sectionHeaderCenter}>
              <div style={styles.eyebrow}>Gateways</div>
              <h2 style={styles.h2}>
                Multiple <span style={styles.accentTeal}>regional doors</span>, one unified system
              </h2>
              <p style={styles.sectionSub}>
                Gateways execute locally, adapt to regional strengths, and feed startups into a shared
                pipeline—without owning separate IP.
              </p>
            </div>

            <div className="grid3" style={styles.grid3}>
              {gateways.map((g) => (
                <div key={g.title} style={styles.gatewayCard}>
                  <div style={styles.gatewayTop}>
                    <div>
                      <div style={styles.gatewayTitle}>{g.title}</div>
                      <div style={styles.gatewayLoc}>{g.location}</div>
                    </div>
                    <span
                      style={g.status === "Consortium" ? styles.statusGold : styles.statusTeal}
                    >
                      {g.status.toUpperCase()}
                    </span>
                  </div>

                  <div style={styles.gatewayBody}>{g.body}</div>

                  <div style={styles.gatewayFooter}>
                    <span style={styles.pillSoft}>{g.tag1}</span>
                    <span style={styles.pillSoft}>{g.tag2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-we-work" style={styles.section}>
          <div style={styles.sectionShell}>
            <div className="splitHeader" style={styles.sectionHeader}>
              <div>
                <div style={styles.eyebrowGold}>How we work</div>
                <h2 style={styles.h2Large}>
                  Built to <span style={styles.accentGold}>scale with clarity</span>
                </h2>
                <p style={styles.sectionSubLeft}>
                  NordiQ Blue AB supports Ocean Community through clear service agreements. The goal
                  is to build durable value and protect IP while keeping the ecosystem mission-driven
                  and operationally stable.
                </p>
              </div>

              <div style={styles.sidePanel}>
                <div style={styles.sidePanelTitle}>Programme ownership (simplified)</div>
                <div style={styles.table}>
                  {programmeRows.map((r) => (
                    <div key={r.type} style={styles.row}>
                      <div style={styles.rowLeft}>{r.type}</div>
                      <div style={styles.rowRight}>
                        <span style={styles.rowChip}>{r.owner}</span>
                        <span style={styles.rowChipAlt}>{r.ip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid3" style={styles.grid3}>
              {workCards.map((w) => (
                <div key={w.title} style={styles.cardWide}>
                  <div style={styles.cardWideTop}>
                    <div style={styles.cardIcon} aria-hidden>
                      {w.icon}
                    </div>
                    <div style={styles.cardTitle}>{w.title}</div>
                  </div>
                  <div style={styles.cardDesc}>{w.desc}</div>
                  <div style={styles.bullets}>
                    {w.bullets.map((b) => (
                      <div key={b} style={styles.bullet}>
                        <span style={styles.bulletDot} aria-hidden />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={styles.footerSection}>
          <div style={styles.footerShell}>
            <div className="footerGrid" style={styles.footerGrid}>
              <div>
                <div style={styles.footerBrand}>
                  <div style={styles.logo} aria-hidden>
                    ⚓
                  </div>
                  <div>
                    <div style={styles.brandName}>NordiQ Blue</div>
                    <div style={styles.brandSub}>Commercial IP & innovation engine</div>
                  </div>
                </div>

                <p style={styles.footerText}>
                  Strategic innovation infrastructure for the blue economy. Registered in Stockholm,
                  Sweden.
                </p>

                <div style={styles.footerFine}>
                  © {new Date().getFullYear()} NordiQ Blue AB. All rights reserved.
                </div>
              </div>

              <div>
                <div style={styles.footerTitle}>Ecosystem</div>
                <div style={styles.footerLinks}>
                  <a
                    href="https://www.oceancommunitychallenge.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.footerLink}
                  >
                    Ocean Community
                  </a>
                  <span style={styles.footerMuted}>Accelerator programmes</span>
                  <span style={styles.footerMuted}>Partner network</span>
                  <span style={styles.footerMuted}>Innovation platform</span>
                </div>
              </div>

              <div>
                <div style={styles.footerTitle}>Contact</div>
                <div style={styles.footerContact}>
                  <div>📍 Stockholm, Sweden</div>
                  <div>
                    ✉️{" "}
                    <a href="mailto:info@nordiqblue.com" style={styles.footerLink}>
                      info@nordiqblue.com
                    </a>
                  </div>
                </div>

                <div style={styles.footerProvided}>
                  <span style={{ opacity: 0.65 }}>Provided to </span>
                  <a
                    href="https://www.oceancommunitychallenge.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.footerLinkTeal}
                  >
                    Ocean Community
                  </a>
                  <span style={{ opacity: 0.65 }}> • </span>
                  <span style={styles.footerPowered}>Powered by NordiQ Blue</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const capabilities = [
  {
    icon: "🚀",
    title: "Accelerator Frameworks",
    desc: "Proprietary methodologies powering ocean venture acceleration across European gateways.",
  },
  {
    icon: "🧩",
    title: "Digital Platform Architecture",
    desc: "Scalable ecosystem infrastructure connecting innovators, mentors, and investors.",
  },
  {
    icon: "📘",
    title: "Playbooks & Curriculum",
    desc: "Licensed learning modules and programme blueprints for ocean innovation.",
  },
  {
    icon: "🛡️",
    title: "IP & Licensing",
    desc: "Protected intellectual property with transparent service & licensing structures for NGO partners.",
  },
  {
    icon: "📊",
    title: "Evaluation & Data Models",
    desc: "Investment-readiness tools and impact measurement frameworks to support decision-making.",
  },
  {
    icon: "🤝",
    title: "Corporate Innovation",
    desc: "Paid programmes connecting corporates with ocean startups and blue economy solutions.",
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
    icon: "🧭",
    title: "Service agreements",
    desc: "Clear delivery model for platform and execution support—transparent and scalable.",
    bullets: ["Arm’s-length agreements", "Defined deliverables", "Low legal burden for gateways"],
  },
  {
    icon: "⚙️",
    title: "Platform infrastructure",
    desc: "Digital architecture powering multi-gateway operations and shared pipeline workflows.",
    bullets: ["Ecosystem tooling", "Shared evaluation models", "Reliable & secure operations"],
  },
  {
    icon: "📜",
    title: "Licensing & curriculum",
    desc: "Protected methodologies and learning modules licensed via Ocean Community where relevant.",
    bullets: ["Playbooks & frameworks", "Certification programmes (paid)", "IP protection & value creation"],
  },
];

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    color: "#123241",
    background:
      "linear-gradient(180deg, #f6fbfc 0%, #eff8f8 45%, #ffffff 100%)",
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  },
  backgroundGlowOne: {
    position: "absolute",
    inset: "-140px auto auto -120px",
    width: 420,
    height: 420,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(31,230,209,0.18) 0%, rgba(31,230,209,0) 72%)",
    pointerEvents: "none",
  },
  backgroundGlowTwo: {
    position: "absolute",
    inset: "160px -80px auto auto",
    width: 420,
    height: 420,
    borderRadius: 999,
    background: "radial-gradient(circle, rgba(255,192,77,0.16) 0%, rgba(255,192,77,0) 72%)",
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "22px 20px 72px",
    position: "relative",
    zIndex: 1,
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: 18,
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(255,255,255,0.78)",
    boxShadow: "0 8px 30px rgba(17, 55, 74, 0.06)",
    backdropFilter: "blur(10px)",
    marginBottom: 16,
  },
  topBarLeft: { display: "flex", alignItems: "center", gap: 10 },
  topBarRight: { display: "flex", alignItems: "center", gap: 10 },
  topBarDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "#10c8b6",
    boxShadow: "0 0 0 5px rgba(16,200,182,0.12)",
  },
  topBarText: { fontSize: 13, color: "#4a6471" },
  topBarLink: { color: "#0b9388", textDecoration: "none", fontWeight: 800 },
  badgeSmall: {
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    padding: "7px 11px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.10)",
    color: "#086c67",
    fontWeight: 800,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "18px 4px 8px",
    marginBottom: 10,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logo: {
    width: 46,
    height: 46,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(180deg, rgba(16,200,182,0.12), rgba(16,200,182,0.06))",
    border: "1px solid rgba(11,147,136,0.14)",
    color: "#0b706a",
    boxShadow: "0 12px 24px rgba(17,55,74,0.06)",
  },
  brandName: { fontWeight: 850, letterSpacing: 0.2, fontSize: 17, color: "#123241" },
  brandSub: { fontSize: 13, color: "#69818d", marginTop: 2 },

  nav: { display: "flex", gap: 18, fontSize: 14, flexWrap: "wrap" },
  navLink: { color: "#35515f", textDecoration: "none", fontWeight: 600 },

  heroSection: {
    padding: "26px 0 18px",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(340px, 0.9fr)",
    gap: 28,
    alignItems: "stretch",
  },
  heroKickerWrap: { display: "inline-flex" },
  heroKicker: {
    fontSize: 12,
    letterSpacing: 2.2,
    textTransform: "uppercase",
    color: "#08756e",
    padding: "9px 13px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.14)",
    background: "rgba(16,200,182,0.10)",
    fontWeight: 800,
  },
  h1: {
    fontSize: 62,
    lineHeight: 1.02,
    margin: "18px 0 14px",
    color: "#0f2c3c",
    letterSpacing: -1.4,
    maxWidth: 760,
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.8,
    color: "#516874",
    margin: 0,
    maxWidth: 760,
  },
  heroCtas: { display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" },
  primaryBtn: {
    background: "linear-gradient(180deg, #0fcdbb, #09b9a8)",
    color: "#ffffff",
    padding: "13px 20px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
    boxShadow: "0 14px 32px rgba(16,200,182,0.22)",
  },
  secondaryBtn: {
    background: "rgba(255,255,255,0.72)",
    color: "#17394a",
    padding: "13px 20px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
    border: "1px solid rgba(18,50,65,0.10)",
    boxShadow: "0 10px 24px rgba(17,55,74,0.05)",
  },
  heroStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    marginTop: 24,
  },
  statCard: {
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(255,255,255,0.82)",
    borderRadius: 20,
    padding: 16,
    boxShadow: "0 16px 34px rgba(17,55,74,0.06)",
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#78909a",
    fontWeight: 800,
  },
  statValue: { marginTop: 7, color: "#17394a", lineHeight: 1.5, fontWeight: 700 },
  statValueSmall: {
    marginTop: 8,
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  miniChip: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.08)",
    color: "#08756e",
    fontSize: 12,
    fontWeight: 800,
  },
  miniChipAlt: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: 999,
    border: "1px solid rgba(209,153,40,0.18)",
    background: "rgba(255,192,77,0.14)",
    color: "#8a6220",
    fontSize: 12,
    fontWeight: 800,
  },

  heroPanel: {
    border: "1px solid rgba(18,50,65,0.08)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(245,252,252,0.95))",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 22px 50px rgba(17,55,74,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heroPanelTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 18,
  },
  panelEyebrow: {
    color: "#78909a",
    textTransform: "uppercase",
    letterSpacing: 1.8,
    fontSize: 11,
    fontWeight: 800,
    marginBottom: 8,
  },
  heroPanelTitle: {
    fontSize: 26,
    lineHeight: 1.15,
    color: "#123241",
    fontWeight: 850,
    maxWidth: 340,
  },
  panelBadge: {
    whiteSpace: "nowrap",
    fontSize: 11,
    fontWeight: 800,
    color: "#08756e",
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.08)",
    borderRadius: 999,
    padding: "8px 10px",
  },
  stackDiagram: { display: "grid", gap: 14 },
  stackItemSoft: {
    borderRadius: 22,
    padding: 18,
    background: "#ffffff",
    border: "1px solid rgba(18,50,65,0.07)",
    boxShadow: "0 12px 28px rgba(17,55,74,0.05)",
  },
  stackItemMid: {
    borderRadius: 22,
    padding: 16,
    background: "rgba(238,247,248,0.9)",
    border: "1px solid rgba(18,50,65,0.06)",
  },
  stackItemStrong: {
    borderRadius: 22,
    padding: 18,
    background: "linear-gradient(180deg, rgba(16,200,182,0.12), rgba(16,200,182,0.06))",
    border: "1px solid rgba(11,147,136,0.14)",
  },
  stackConnector: {
    justifySelf: "center",
    fontSize: 12,
    color: "#5f7681",
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.88)",
    border: "1px solid rgba(18,50,65,0.08)",
  },
  stackItemLabel: {
    color: "#6e8490",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: 800,
    marginBottom: 8,
  },
  stackItemLabelTeal: {
    color: "#08756e",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: 900,
    marginBottom: 8,
  },
  stackItemTitle: {
    fontSize: 20,
    lineHeight: 1.15,
    color: "#123241",
    fontWeight: 850,
    marginBottom: 8,
  },
  stackItemText: {
    fontSize: 14,
    lineHeight: 1.65,
    color: "#526874",
  },
  stackRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },
  anchorCard: {
    borderRadius: 18,
    background: "rgba(255,255,255,0.86)",
    border: "1px solid rgba(18,50,65,0.07)",
    padding: 14,
  },
  anchorLabel: {
    color: "#7b919b",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: 800,
    marginBottom: 6,
  },
  anchorTitle: {
    color: "#123241",
    fontSize: 16,
    fontWeight: 800,
  },

  section: { padding: "20px 0 8px" },
  sectionShell: {
    background: "rgba(255,255,255,0.82)",
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 30,
    padding: "34px 30px",
    boxShadow: "0 20px 48px rgba(17,55,74,0.06)",
  },
  sectionShellStrong: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,252,252,0.96))",
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 30,
    padding: "34px 30px",
    boxShadow: "0 20px 48px rgba(17,55,74,0.06)",
  },
  sectionHeaderCenter: { textAlign: "center", maxWidth: 860, margin: "0 auto 18px" },
  sectionHeader: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 20,
    alignItems: "start",
    marginBottom: 20,
  },
  eyebrow: {
    color: "#0b9388",
    fontSize: 12,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    fontWeight: 800,
  },
  eyebrowGold: {
    color: "#bb7c16",
    fontSize: 12,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    fontWeight: 800,
  },
  h2: { fontSize: 42, margin: "10px 0 10px", lineHeight: 1.08, color: "#123241" },
  h2Large: { fontSize: 46, margin: "10px 0 12px", lineHeight: 1.06, color: "#123241" },
  sectionSub: { color: "#58707b", margin: 0, lineHeight: 1.8 },
  sectionSubLeft: { color: "#58707b", margin: 0, lineHeight: 1.8, maxWidth: 720 },
  accentTeal: { color: "#0bb4a5" },
  accentGold: { color: "#d09128" },

  grid6: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    marginTop: 22,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    marginTop: 20,
  },
  card: {
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 22,
    padding: 22,
    background: "linear-gradient(180deg, #ffffff, #fbfefe)",
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    background: "rgba(16,200,182,0.10)",
    border: "1px solid rgba(11,147,136,0.12)",
    marginBottom: 14,
    fontSize: 18,
  },
  cardTitle: { fontWeight: 850, fontSize: 19, marginBottom: 8, color: "#123241" },
  cardDesc: { color: "#5a717c", fontSize: 14, lineHeight: 1.7 },

  callout: {
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(255,255,255,0.86)",
    borderRadius: 24,
    padding: 18,
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  calloutTitle: { fontWeight: 900, marginBottom: 10, color: "#123241" },
  calloutRow: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 },
  calloutText: { color: "#59707b", lineHeight: 1.65, fontSize: 14 },
  ecosystemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    marginTop: 14,
  },
  layerCard: {
    border: "1px solid rgba(18,50,65,0.07)",
    background: "rgba(255,255,255,0.84)",
    borderRadius: 24,
    padding: 22,
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  layerCardStrong: {
    border: "1px solid rgba(11,147,136,0.16)",
    background: "linear-gradient(180deg, rgba(16,200,182,0.12), rgba(255,255,255,0.9))",
    borderRadius: 24,
    padding: 22,
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  layerTag: {
    display: "inline-flex",
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(245,249,250,0.95)",
    color: "#6f8791",
    marginBottom: 12,
    fontWeight: 800,
  },
  layerTagTeal: {
    display: "inline-flex",
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.10)",
    color: "#08756e",
    marginBottom: 12,
    fontWeight: 900,
  },
  layerTitle: { fontSize: 19, fontWeight: 900, marginBottom: 8, color: "#123241" },
  layerDesc: { color: "#5a717c", lineHeight: 1.7, fontSize: 14 },
  layerFooter: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 },
  pillSoft: {
    fontSize: 12,
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(245,249,250,0.96)",
    color: "#506874",
    fontWeight: 700,
  },
  pillSoftAlt: {
    fontSize: 12,
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(209,153,40,0.16)",
    background: "rgba(255,192,77,0.14)",
    color: "#8a6220",
    fontWeight: 800,
  },
  pillStrong: {
    fontSize: 12,
    padding: "7px 10px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.09)",
    color: "#08756e",
    fontWeight: 900,
  },

  gatewayCard: {
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 24,
    padding: 22,
    background: "#ffffff",
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  gatewayTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  gatewayTitle: { fontWeight: 900, fontSize: 19, color: "#123241" },
  gatewayLoc: { color: "#718894", marginTop: 4 },
  statusTeal: {
    padding: "7px 10px",
    borderRadius: 999,
    background: "rgba(16,200,182,0.10)",
    border: "1px solid rgba(11,147,136,0.16)",
    color: "#08756e",
    fontWeight: 900,
    fontSize: 12,
  },
  statusGold: {
    padding: "7px 10px",
    borderRadius: 999,
    background: "rgba(255,192,77,0.14)",
    border: "1px solid rgba(209,153,40,0.16)",
    color: "#8a6220",
    fontWeight: 900,
    fontSize: 12,
  },
  gatewayBody: { color: "#59707b", lineHeight: 1.7, fontSize: 14 },
  gatewayFooter: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 },

  sidePanel: {
    border: "1px solid rgba(18,50,65,0.07)",
    background: "#ffffff",
    borderRadius: 24,
    padding: 18,
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  sidePanelTitle: { fontWeight: 900, marginBottom: 10, color: "#123241" },
  table: { display: "grid", gap: 10 },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "flex-start",
    borderTop: "1px solid rgba(18,50,65,0.06)",
    paddingTop: 10,
  },
  rowLeft: { fontSize: 13, color: "#35515f", maxWidth: 260, lineHeight: 1.45, fontWeight: 600 },
  rowRight: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" },
  rowChip: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.08)",
    color: "#08756e",
    fontWeight: 900,
  },
  rowChipAlt: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(18,50,65,0.08)",
    background: "rgba(245,249,250,0.95)",
    color: "#59707b",
    fontWeight: 700,
  },
  cardWide: {
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 24,
    padding: 22,
    background: "#ffffff",
    boxShadow: "0 14px 30px rgba(17,55,74,0.05)",
  },
  cardWideTop: { display: "flex", gap: 10, alignItems: "center", marginBottom: 10 },
  bullets: { display: "grid", gap: 8, marginTop: 14 },
  bullet: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    color: "#54707b",
    fontSize: 14,
    lineHeight: 1.6,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#0bb4a5",
    marginTop: 7,
    flex: "0 0 auto",
  },

  footerSection: { padding: "24px 0 0" },
  footerShell: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(244,250,251,0.96))",
    border: "1px solid rgba(18,50,65,0.07)",
    borderRadius: 30,
    padding: "28px 30px",
    boxShadow: "0 20px 48px rgba(17,55,74,0.06)",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
    gap: 18,
  },
  footerBrand: { display: "flex", gap: 12, alignItems: "center" },
  footerText: { color: "#5c737d", lineHeight: 1.8, marginTop: 12, maxWidth: 520 },
  footerFine: { color: "#8396a0", fontSize: 13, marginTop: 16 },
  footerTitle: {
    fontWeight: 900,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    fontSize: 12,
    color: "#35515f",
    marginBottom: 12,
  },
  footerLinks: { display: "grid", gap: 10 },
  footerLink: { color: "#17394a", textDecoration: "none", fontWeight: 700 },
  footerLinkTeal: { color: "#0b9388", textDecoration: "none", fontWeight: 900 },
  footerMuted: { color: "#6f8791" },
  footerContact: { color: "#54707b", lineHeight: 1.9 },
  footerProvided: { marginTop: 14, fontSize: 13, color: "#48636f" },
  footerPowered: {
    display: "inline-flex",
    padding: "4px 9px",
    borderRadius: 999,
    border: "1px solid rgba(11,147,136,0.16)",
    background: "rgba(16,200,182,0.08)",
    color: "#08756e",
    fontWeight: 900,
  },
};

const responsiveCss = `
  @media (max-width: 1040px) {
    .heroGrid,
    .splitHeader,
    .ecosystemGrid,
    .footerGrid {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 900px) {
    .grid6 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    .grid3 { grid-template-columns: 1fr !important; }
    .heroStats { grid-template-columns: 1fr !important; }
  }

  @media (max-width: 720px) {
    .grid6 { grid-template-columns: 1fr !important; }
  }
`;
