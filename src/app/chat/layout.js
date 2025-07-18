import "./globals.scss";
import AppShell from "@/layout/AppShell.jsx";

export const metadata = {
  title: "Flollama - Your Personal AI Assistant",
  description:
    "Flollama is a blazing-fast, private ChatGPT alternative built on Ollama + LLaMA 3.2. Created by Pratyush Kumar.",
  keywords: [
    "Flollama",
    "ChatGPT clone",
    "AI assistant",
    "Ollama",
    "LLaMA 3",
    "Next.js AI",
    "private AI chat",
    "open source GPT",
    "local LLM",
    "Fast ChatGPT alternative",
    "Created by Pratyush Kumar",
    "Made by Pratyush Kumar",
  ],
  authors: [{ name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app" }],
  creator: "Pratyush Kumar",
  publisher: "Flollama · Made by Pratyush Kumar",
  applicationName: "Flollama",
  generator: "Next.js · Vercel",
  metadataBase: new URL("https://flollama.vercel.app"),
  openGraph: {
    title: "Flollama - Fast & Private ChatGPT Alternative",
    description:
      "Talk to a fast, private, and local AI assistant powered by LLaMA 3.2. Made by Pratyush Kumar using Ollama + Next.js.",
    url: "https://flollama.vercel.app",
    siteName: "Flollama",
    images: [
      {
        url: "https://flollama.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flollama - Made by Pratyush Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flollama - Made by Pratyush Kumar",
    description:
      "Experience the power of LLaMA 3.2 in Flollama – your fast, private, open-source ChatGPT alternative. Created by Pratyush Kumar.",
    creator: "@nvmpratyush",
    images: ["https://flollama.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return <AppShell>{children}</AppShell>;
}
