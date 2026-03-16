import { ImageResponse } from "next/og";
import { siteConfig, siteUrl } from "../lib/site";

export const alt = siteConfig.socialAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const hostname = new URL(siteUrl).hostname.replace(/^www\./, "");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top, rgba(161,202,241,0.20) 0%, transparent 36%), linear-gradient(180deg, #000739 0%, #0F1A79 46%, #000739 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 32,
            padding: "42px 48px",
            background: "rgba(0, 7, 57, 0.30)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              NordiQ Blue AB
            </div>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: -3,
                maxWidth: 920,
              }}
            >
              Professional infrastructure for the Blue Economy
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(223,223,223,0.88)",
                maxWidth: 860,
              }}
            >
              Commercial IP and innovation infrastructure powering scalable ocean ventures across Europe.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: "#A1CAF1",
              }}
            >
              {hostname}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
