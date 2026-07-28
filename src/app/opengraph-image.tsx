import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RISE360 Global Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #010f2e 0%, #012269 50%, #0237a0 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            color: "#4DA6FF",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          RISE360 GLOBAL
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          Grow global with confidence
        </div>

        {/* Sub */}
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 24,
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          Cross-border consulting & financial operations outsourcing
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["100+ Clients", "6 Continents", "15+ Years"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(77, 166, 255, 0.15)",
                border: "1px solid rgba(77, 166, 255, 0.3)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#4DA6FF",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
