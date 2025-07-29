import type { Metadata } from "next";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Footer from "./components/Footer";
import { alliance } from "@/app/fonts";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkSync - AI Employee Support Copilot",
  keywords: [
    "AI-powered employee",
    "support",
    "SMB support",
    "IT support",
    "HR automation",
    "Slack integration",
    "Teams app",
    "AI copilot for SMBs",
    "AI employee support",
    "AI HR support",
    "AI employee support copilot",
    "AI support for SMBs",
    "AI IT support",
    "AI HR support",
    "AI finance support",
    "AI security support",
    "AI productivity tools",
    "AI automation for SMBs",
    "AI copilot for small businesses",
  ],
  description:
    "AI employee support copilot for SMBs. Instant IT, HR, Finance & Security help via Slack, Teams or web. Automate support tasks and boost productivity.",
  // Add icons here instead of manually in head
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alliance.variable} antialiased bg-[#121212]`}>
        <ScrollAwareNavbar />
        <main className="font-alliance">
          <CopilotKit runtimeUrl="/api/copilotkit" agent="hrAgent">
            {children}
          </CopilotKit>
        </main>
        <Footer />
      </body>
    </html>
  );
}
