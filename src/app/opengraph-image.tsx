import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Build-time Open Graph image (1200x630). Uses next/og — no extra dependency.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, color: "#a5b4fc", marginBottom: 16 }}>
          {site.role}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#d4d4d8",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
