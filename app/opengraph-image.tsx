import { ImageResponse } from "next/og"

export const alt = "Mohamed Aziz Sliti — Full-Stack and Mobile Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070912",
          color: "#F8FAFC",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#94A3B8" }}>AZ.</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 0.95, letterSpacing: -2 }}>Engineering digital experiences.</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#94A3B8" }}>
            Mohamed Aziz Sliti — Full-Stack & Mobile Developer
          </div>
        </div>
      </div>
    ),
    size,
  )
}
