export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial',
        background: '#070B10',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '56px 20px' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              aria-hidden
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                display: 'grid',
                placeItems: 'center',
                background: 'rgba(0, 255, 209, 0.10)',
                border: '1px solid rgba(0, 255, 209, 0.25)',
              }}
            >
              ⚓
            </div>
            <div style={{ fontWeight: 800, letterSpacing: 0.4 }}>
              NordiQ Blue AB
            </div>
          </div>

          <nav style={{ display: 'flex', gap: 16, fontSize: 14, opacity: 0.9 }}>
            <a href="#offer" style={linkStyle}>
              What we do
            </a>
            <a href="#ecosystem" style={linkStyle}>
              Ecosystem
            </a>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </nav>
        </header>

        <section style={{ padding: '82px 0 52px' }}>
          <div style={{ maxWidth: 880 }}>
            <div
              style={{
                display: 'inline-flex',
                gap: 10,
                alignItems: 'center',
                padding: '8px 12px',
                borderRadius: 999,
                border: '1px solid rgba(0, 255, 209, 0.22)',
                background: 'rgba(0, 255, 209, 0.06)',
                color: '#7fffe9',
                fontSize: 12,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
              }}
            >
              Commercial IP & Innovation Engine
            </div>

            <h1 style={{ fontSize: 54, lineHeight: 1.05, margin: '18px 0 10px' }}>
              Powering the <span style={{ color: '#1FE6D1' }}>Blue Economy</span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.78, margin: 0 }}>
              Strategic innovation infrastructure for scalable ocean ventures. We build the
              frameworks, platforms, and methodologies that drive Europe’s ocean innovation
              ecosystem.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#ecosystem" style={buttonPrimary}>
                Explore Our Ecosystem →
              </a>
              <a href="#contact" style={buttonSecondary}>
                Partner With Us
              </a>
            </div>
          </div>
        </section>

        <section id="offer" style={{ padding: '42px 0 10px' }}>
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <div style={eyebrow}>What we build</div>
            <h2 style={{ fontSize: 40, margin: '10px 0 8px' }}>
              The Innovation <span style={{ color: '#1FE6D1' }}>Engine</span>
            </h2>
            <p style={{ opacity: 0.72, margin: 0 }}>
              NordiQ Blue owns and develops the commercial infrastructure that powers Ocean
              Community’s multi-gateway European platform.
            </p>
          </div>

          <div style={grid}>
            {cards.map((c) => (
              <div key={c.title} style={card}>
                <div style={cardIcon}>{c.icon}</div>
                <div style={{ fontWeight: 750, fontSize: 18, marginBottom: 8 }}>
                  {c.title}
                </div>
                <div style={{ opacity: 0.75, fontSize: 14, lineHeight: 1.6 }}>
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="ecosystem" style={{ padding: '58px 0' }}>
          <div style={twoCol}>
            <div>
              <div style={eyebrowAlt}>Ecosystem structure</div>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, margin: '10px 0 14px' }}>
                One System. <span style={{ color: '#FFC04D' }}>Multiple Gateways.</span>
              </h2>
              <p style={{ opacity: 0.78, lineHeight: 1.7, marginTop: 0 }}>
                NordiQ Blue serves as the commercial engine behind Ocean Community’s European
                network. We provide management services, platform infrastructure, and programme
                execution support through transparent service agreements.
              </p>

              <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.85, lineHeight: 1.8 }}>
                <li>Anchor Partner to Ocean Community</li>
                <li>Arm’s-length service & licensing agreements</li>
                <li>Revenue reinvested into ocean innovation</li>
              </ul>

              <div style={{ marginTop: 18, opacity: 0.8, fontSize: 13 }}>
                Connecting points: <b>“Powered by NordiQ Blue”</b> on Ocean Community •{' '}
                <b>“Provided to Ocean Community”</b> here
              </div>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              {gateways.map((g) => (
                <div key={g.title} style={gatewayCard}>
                  <div>
                    <div style={{ fontWeight: 750 }}>{g.title}</div>
                    <div style={{ opacity: 0.72, marginTop: 2 }}>{g.location}</div>
                  </div>
                  <div style={pill(g.statusColor)}>{g.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ padding: '26px 0 50px' }}>
          <div style={footerGrid}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  aria-hidden
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 12,
                    display: 'grid',
                    placeItems: 'center',
                    background: 'rgba(0, 255, 209, 0.10)',
                    border: '1px solid rgba(0, 255, 209, 0.25)',
                  }}
                >
                  ⚓
                </div>
                <div style={{ fontWeight: 800 }}>NordiQ Blue</div>
              </div>
              <p style={{ opacity: 0.72, lineHeight: 1.7, marginTop: 14 }}>
                Strategic innovation infrastructure for the blue economy. Registered in Stockholm,
                Sweden.
              </p>
              <div style={{ opacity: 0.55, fontSize: 13, marginTop: 18 }}>
                © {new Date().getFullYear()} NordiQ Blue AB. All rights reserved.
              </div>
            </div>

            <div>
              <div style={footerTitle}>Ecosystem</div>
              <div style={footerLinkWrap}>
                <a style={footerLink} href="https://www.oceancommunitychallenge.com/">
                  Ocean Community
                </a>
                <span style={footerMuted}>Accelerator Programmes</span>
                <span style={footerMuted}>Partner Network</span>
                <span style={footerMuted}>Innovation Platform</span>
              </div>
            </div>

            <div>
              <div style={footerTitle}>Contact</div>
              <div style={{ opacity: 0.78, lineHeight: 1.9 }}>
                <div>📍 Stockholm, Sweden</div>
                <div>✉️ info@nordiqblue.com</div>
              </div>
              <div style={{ marginTop: 14, opacity: 0.7, fontSize: 13 }}>
                <span style={{ opacity: 0.7 }}>Provided to</span>{' '}
                <a href="https://www.oceancommunitychallenge.com/" style={{ color: '#1FE6D1' }}>
                  Ocean Community
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
};

const buttonPrimary: React.CSSProperties = {
  background: '#1FE6D1',
  color: '#061018',
  padding: '12px 18px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 14,
};

const buttonSecondary: React.CSSProperties = {
  background: 'transparent',
  color: 'rgba(255,255,255,0.9)',
  padding: '12px 18px',
  borderRadius: 999,
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: 14,
  border: '1px solid rgba(255,255,255,0.22)',
};

const eyebrow: React.CSSProperties = {
  color: '#1FE6D1',
  fontSize: 12,
  letterSpacing: 2.8,
  textTransform: 'uppercase',
  opacity: 0.9,
};

const eyebrowAlt: React.CSSProperties = {
  color: '#FFC04D',
  fontSize: 12,
  letterSpacing: 2.8,
  textTransform: 'uppercase',
  opacity: 0.9,
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 14,
  marginTop: 20,
};

const card: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 18,
  padding: 18,
  background: 'rgba(255,255,255,0.03)',
};

const cardIcon: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 14,
  display: 'grid',
  placeItems: 'center',
  background: 'rgba(31,230,209,0.10)',
  border: '1px solid rgba(31,230,209,0.22)',
  marginBottom: 12,
};

const twoCol: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.15fr 0.85fr',
  gap: 18,
};

const gatewayCard: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 18,
  padding: 16,
  background: 'rgba(255,255,255,0.03)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
};

const pill = (bg: string): React.CSSProperties => ({
  background: bg,
  color: '#061018',
  fontWeight: 800,
  fontSize: 12,
  padding: '6px 10px',
  borderRadius: 999,
});

const footerGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr 0.8fr',
  gap: 18,
  borderTop: '1px solid rgba(255,255,255,0.08)',
  paddingTop: 26,
};

const footerTitle: React.CSSProperties = {
  fontWeight: 800,
  letterSpacing: 1.6,
  textTransform: 'uppercase',
  fontSize: 12,
  opacity: 0.9,
  marginBottom: 12,
};

const footerLinkWrap: React.CSSProperties = {
  display: 'grid',
  gap: 10,
};

const footerLink: React.CSSProperties = {
  color: '#1FE6D1',
  textDecoration: 'none',
  fontWeight: 700,
};

const footerMuted: React.CSSProperties = {
  opacity: 0.7,
};

const cards = [
  {
    icon: '🚀',
    title: 'Accelerator Frameworks',
    desc: 'Proprietary methodologies powering ocean startup acceleration across European gateways.',
  },
  {
    icon: '🧩',
    title: 'Digital Platform Architecture',
    desc: 'Scalable ecosystem infrastructure connecting innovators, mentors, and investors.',
  },
  {
    icon: '📘',
    title: 'Playbooks & Curriculum',
    desc: 'Licensed learning modules and programme blueprints for ocean innovation.',
  },
  {
    icon: '🛡️',
    title: 'IP & Licensing',
    desc: 'Protected intellectual property with transparent service agreements for NGO partners.',
  },
  {
    icon: '📊',
    title: 'Evaluation & Data Models',
    desc: 'Investment-readiness assessment tools and impact measurement frameworks.',
  },
  {
    icon: '🤝',
    title: 'Corporate Innovation',
    desc: 'Paid programmes connecting corporates with ocean startups and blue economy solutions.',
  },
];

const gateways = [
  { title: 'Atlantic Gateway', location: 'Lisbon, Portugal', status: 'Active', statusColor: '#1FE6D1' },
  { title: 'Nordic–Baltic Gateway', location: 'Stockholm, Sweden', status: 'Active', statusColor: '#1FE6D1' },
  { title: 'Eastern Mediterranean', location: 'Izmir, Türkiye', status: 'Consortium', statusColor: '#FFC04D' },
];