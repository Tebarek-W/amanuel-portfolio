import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Amanuel Tadele Dabarsho — Research Specialist"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const portraitPath = join(
    process.cwd(),
    "public/images/amanuel-portrait-square.jpg"
  )
  const portraitData = await readFile(portraitPath)
  const portraitSrc = `data:image/jpeg;base64,${portraitData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f4ee",
          color: "#152238",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#2f6f73",
              marginBottom: 18,
            }}
          >
            Research Specialist
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 620,
            }}
          >
            Amanuel Tadele Dabarsho
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#4b5568",
              maxWidth: 580,
            }}
          >
            Turning data into actionable insights through research data
            management, digital surveys, and analysis.
          </div>
        </div>
        <div
          style={{
            width: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 56,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={340}
            height={340}
            alt=""
            style={{
              borderRadius: 28,
              objectFit: "cover",
              border: "1px solid #d9d3c8",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
