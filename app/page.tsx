// app/page.tsx
export default function Home() {
  return (
    <main style={styles.main}>
      <style>{responsiveCss}</style>

      <div style={styles.container}>
        {/* Top bar */}
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

        {/* Header */}
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

        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <div style={styles.heroKickerWrap}>
              <span style={styles.heroKicker}>Commercial IP & Innovation Engine</span>
            </div>

            <h1 style={styles.h1}>
              Powering the <span style={styles.accentTeal}>Blue Economy</span>
            </h1>

            <p style={styles.lead}>
              We build the frameworks, platforms, and methodologies that enable scalable ocean
              ventures—supporting Ocean Community’s multi-gateway European ecosystem through
              transparent service and licensing agreements.
            </p>

            <div style={styles.heroCtas}>
              <a href="#ecosystem" style={styles.primaryBtn}>
                Explore the ecosystem →
              </a>
              <a href="#contact" style={styles.secondaryBtn}>
                Partner with us
              </a>
            </div>

            <div style={styles.heroMetaRow}>
              <div style={styles.heroMetaItem}>
                <div style={styles.metaLabel}>Location</div>
                <div style={styles.metaValue}>Stockholm, Sweden</div>
              </div>
              <div style={styles.heroMetaItem}>
                <div style={styles.metaLabel}>Positioning</div>
                <div style={styles.metaValue}>B2B backend & strategic entity</div>
              </div>
              <div style={styles.heroMetaItem}>
                <div style={styles.metaLabel}>Connection</div>
                <div style={styles.metaValue}>
                  <span style={styles.miniChip}>Powered by NordiQ Blue</span>{" "}
                  <span style={styles.miniChipAlt}>Provided to Ocean Community</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section id="what-we-build" style={styles.section}>
          <div style={styles.sectionHeaderCenter}>
            <div style={styles.eyebrow}>What we build</div>
            <h2 style={styles.h2}>
              The Innovation <span style={styles.accentTeal}>Engine</span>
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
        </section>

        {/* Ecosystem model (diagram-like) */}
        <section id="ecosystem" style={styles.section}>
          <div style={styles.sectionHeader}>
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
                Keeps the system unified while protecting IP, building value, and reducing scale
                risk.
              </div>
            </div>
          </div>

          <div className="ecosystemGrid" style={styles.ecosystemGrid}>
            {/* OC Layer */}
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

            {/* Nonprofit anchors */}
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

            {/* NB Engine */}
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

            {/* Agreements */}
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
        </section>

        {/* Gateways */}
        <section id="gateways" style={styles.section}>
          <div style={styles.sectionHeaderCenter}>
            <div style={styles.eyebrow}>Gateways</div>
            <h2 style={styles.h2}>
              Multiple <span style={styles.accentTeal}>regional doors</span>, one unified system
            </h2>
            <p style={styles.sectionSub}>
              Gateways execute locally, adapt to regional strengths, and feed startups into a
              shared pipeline—without owning separate IP.
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
                  <span style={g.status === "Consortium" ? styles.statusGold : styles.statusTeal}>
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
        </section>

        {/* How we work */}
        <section id="how-we-work" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={styles.eyebrowGold}>How we work</div>
              <h2 style={styles.h2Large}>
                Built to <span style={styles.accentGold}>scale without risk</span>
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
        </section>

        {/* Footer / Contact */}
        <section id="contact" style={styles.footerSection}>
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
                <span style={styles.footerMuted}>Accelerator Programmes</span>
                <span style={styles.footerMuted}>Partner Network</span>
                <span style={styles.footerMuted}>Innovation Platform</span>
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
                <span style={{ opacity: 0.7 }}>Provided to </span>
                <a
                  href="https://www.oceancommunitychallenge.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.footerLinkTeal}
                >
                  Ocean Community
                </a>
                <span style={{ opacity: 0.7 }}> • </span>
                <span style={styles.footerPowered}>Powered by NordiQ Blue</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------------------------- content ---------------------------- */

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
  { type: "Open innovation challenge", owner: "Ocean Community + Gateway", ip: "OC brand / NordiQ framework" },
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

/* ---------------------------- styles ---------------------------- */

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    color: "white",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(31,230,209,0.16), transparent 55%), radial-gradient(900px 500px at 80% 20%, rgba(255,192,77,0.10), transparent 55%), radial-gradient(900px 500px at 60% 80%, rgba(31,230,209,0.10), transparent 55%), #070B10",
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
  },
  container: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "22px 20px 64px",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    marginBottom: 16,
  },
  topBarLeft: { display: "flex", alignItems: "center", gap: 10 },
  topBarRight: { display: "flex", alignItems: "center", gap: 10 },
  topBarDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(31,230,209,0.95)",
    boxShadow: "0 0 0 4px rgba(31,230,209,0.10)",
  },
  topBarText: { fontSize: 13, opacity: 0.88 },
  topBarLink: { color: "#1FE6D1", textDecoration: "none", fontWeight: 700 },
  badgeSmall: {
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.22)",
    background: "rgba(31,230,209,0.08)",
    color: "#A6FFF4",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "rgba(31,230,209,0.10)",
    border: "1px solid rgba(31,230,209,0.22)",
  },
  brandName: { fontWeight: 850, letterSpacing: 0.3, fontSize: 16 },
  brandSub: { fontSize: 13, opacity: 0.72, marginTop: 2 },

  nav: { display: "flex", gap: 16, fontSize: 14, opacity: 0.92, flexWrap: "wrap" },
  navLink: { color: "rgba(255,255,255,0.86)", textDecoration: "none" },

  hero: { padding: "56px 0 26px" },
  heroInner: { maxWidth: 900 },
  heroKickerWrap: { display: "inline-flex" },
  heroKicker: {
    fontSize: 12,
    letterSpacing: 2.6,
    textTransform: "uppercase",
    color: "#A6FFF4",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.24)",
    background: "rgba(31,230,209,0.08)",
  },

  h1: { fontSize: 56, lineHeight: 1.05, margin: "18px 0 10px" },
  lead: { fontSize: 18, lineHeight: 1.75, opacity: 0.86, margin: 0, maxWidth: 820 },

  heroCtas: { display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" },
  primaryBtn: {
    background: "#1FE6D1",
    color: "#061018",
    padding: "12px 18px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
  },
  secondaryBtn: {
    background: "transparent",
    color: "rgba(255,255,255,0.92)",
    padding: "12px 18px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 800,
    fontSize: 14,
    border: "1px solid rgba(255,255,255,0.22)",
  },

  heroMetaRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    marginTop: 22,
  },
  heroMetaItem: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 16,
    padding: 12,
  },
  metaLabel: { fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.7 },
  metaValue: { marginTop: 6, opacity: 0.9, lineHeight: 1.5 },

  miniChip: {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.25)",
    background: "rgba(31,230,209,0.08)",
    color: "#A6FFF4",
    fontSize: 12,
    fontWeight: 800,
  },
  miniChipAlt: {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,192,77,0.22)",
    background: "rgba(255,192,77,0.08)",
    color: "#FFE2A8",
    fontSize: 12,
    fontWeight: 800,
  },

  section: { padding: "44px 0 6px" },

  sectionHeaderCenter: { textAlign: "center", maxWidth: 860, margin: "0 auto 16px" },
  sectionHeader: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 16,
    alignItems: "start",
    marginBottom: 18,
  },

  eyebrow: {
    color: "#1FE6D1",
    fontSize: 12,
    letterSpacing: 2.8,
    textTransform: "uppercase",
    opacity: 0.9,
  },
  eyebrowGold: {
    color: "#FFC04D",
    fontSize: 12,
    letterSpacing: 2.8,
    textTransform: "uppercase",
    opacity: 0.95,
  },

  h2: { fontSize: 40, margin: "10px 0 8px", lineHeight: 1.1 },
  h2Large: { fontSize: 44, margin: "10px 0 10px", lineHeight: 1.08 },
  sectionSub: { opacity: 0.82, margin: 0, lineHeight: 1.75 },
  sectionSubLeft: { opacity: 0.84, margin: 0, lineHeight: 1.75, maxWidth: 720 },

  accentTeal: { color: "#1FE6D1" },
  accentGold: { color: "#FFC04D" },

  grid6: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    marginTop: 18,
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
    marginTop: 18,
  },

  card: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
  },
  cardIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "rgba(31,230,209,0.10)",
    border: "1px solid rgba(31,230,209,0.22)",
    marginBottom: 12,
    fontSize: 18,
  },
  cardTitle: { fontWeight: 850, fontSize: 18, marginBottom: 8 },
  cardDesc: { opacity: 0.78, fontSize: 14, lineHeight: 1.65 },

  /* Ecosystem model */
  callout: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 16,
  },
  calloutTitle: { fontWeight: 900, marginBottom: 10 },
  calloutRow: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 },
  calloutText: { opacity: 0.78, lineHeight: 1.6, fontSize: 14 },

  ecosystemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 14,
    marginTop: 14,
  },

  layerCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 18,
  },
  layerCardStrong: {
    border: "1px solid rgba(31,230,209,0.20)",
    background: "rgba(31,230,209,0.06)",
    borderRadius: 18,
    padding: 18,
  },
  layerTag: {
    display: "inline-flex",
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    opacity: 0.9,
    marginBottom: 12,
  },
  layerTagTeal: {
    display: "inline-flex",
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.22)",
    background: "rgba(31,230,209,0.10)",
    color: "#A6FFF4",
    marginBottom: 12,
    fontWeight: 900,
  },
  layerTitle: { fontSize: 18, fontWeight: 900, marginBottom: 8 },
  layerDesc: { opacity: 0.8, lineHeight: 1.65, fontSize: 14 },
  layerFooter: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },

  pillSoft: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    opacity: 0.9,
  },
  pillSoftAlt: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,192,77,0.20)",
    background: "rgba(255,192,77,0.08)",
    color: "#FFE2A8",
    fontWeight: 800,
  },
  pillStrong: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.22)",
    background: "rgba(31,230,209,0.10)",
    color: "#A6FFF4",
    fontWeight: 900,
  },

  /* Gateways */
  gatewayCard: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
  },
  gatewayTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 10,
  },
  gatewayTitle: { fontWeight: 900, fontSize: 18 },
  gatewayLoc: { opacity: 0.74, marginTop: 4 },
  statusTeal: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(31,230,209,0.16)",
    border: "1px solid rgba(31,230,209,0.25)",
    color: "#A6FFF4",
    fontWeight: 900,
    fontSize: 12,
  },
  statusGold: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,192,77,0.14)",
    border: "1px solid rgba(255,192,77,0.22)",
    color: "#FFE2A8",
    fontWeight: 900,
    fontSize: 12,
  },
  gatewayBody: { opacity: 0.82, lineHeight: 1.65, fontSize: 14 },
  gatewayFooter: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 },

  /* How we work */
  sidePanel: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 16,
  },
  sidePanelTitle: { fontWeight: 900, marginBottom: 10 },
  table: { display: "grid", gap: 10 },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "flex-start",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: 10,
  },
  rowLeft: { fontSize: 13, opacity: 0.9, maxWidth: 260, lineHeight: 1.35 },
  rowRight: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" },
  rowChip: {
    fontSize: 12,
    padding: "5px 9px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.22)",
    background: "rgba(31,230,209,0.10)",
    color: "#A6FFF4",
    fontWeight: 900,
  },
  rowChipAlt: {
    fontSize: 12,
    padding: "5px 9px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    opacity: 0.9,
  },

  cardWide: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
  },
  cardWideTop: { display: "flex", gap: 10, alignItems: "center", marginBottom: 10 },
  bullets: { display: "grid", gap: 8, marginTop: 12 },
  bullet: { display: "flex", gap: 10, alignItems: "flex-start", opacity: 0.86, fontSize: 14, lineHeight: 1.55 },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "rgba(31,230,209,0.95)",
    marginTop: 6,
    flex: "0 0 auto",
  },

  /* Footer */
  footerSection: { padding: "40px 0 0" },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
    gap: 18,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    paddingTop: 22,
  },
  footerBrand: { display: "flex", gap: 12, alignItems: "center" },
  footerText: { opacity: 0.75, lineHeight: 1.75, marginTop: 12, maxWidth: 520 },
  footerFine: { opacity: 0.55, fontSize: 13, marginTop: 16 },

  footerTitle: {
    fontWeight: 900,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    fontSize: 12,
    opacity: 0.92,
    marginBottom: 12,
  },
  footerLinks: { display: "grid", gap: 10 },
  footerLink: { color: "rgba(255,255,255,0.90)", textDecoration: "none", fontWeight: 700 },
  footerLinkTeal: { color: "#1FE6D1", textDecoration: "none", fontWeight: 900 },
  footerMuted: { opacity: 0.72 },
  footerContact: { opacity: 0.82, lineHeight: 1.9 },
  footerProvided: { marginTop: 14, fontSize: 13, opacity: 0.92 },
  footerPowered: {
    display: "inline-flex",
    padding: "3px 8px",
    borderRadius: 999,
    border: "1px solid rgba(31,230,209,0.22)",
    background: "rgba(31,230,209,0.10)",
    color: "#A6FFF4",
    fontWeight: 900,
  },
};

const responsiveCss = `
  /* mobile nav spacing */
  @media (max-width: 900px) {
    .grid6 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    .grid3 { grid-template-columns: 1fr !important; }
    .ecosystemGrid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 720px) {
    .footerGrid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 980px) {
    /* make header sections stack */
    section[id="ecosystem"] > div { }
  }
  @media (max-width: 980px) {
    /* the section header with two columns */
    div[style*="grid-template-columns: 1.2fr 0.8fr"] {
      grid-template-columns: 1fr !important;
    }
  }
`;