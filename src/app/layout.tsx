import type { Metadata } from "next"
import { inter, playfairDisplay } from "../styles/fonts"
import "../styles/global.css"

export const metadata: Metadata = {
  title: "RAIDE",
  description: "Radical AI Deployment Ecosystem",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
