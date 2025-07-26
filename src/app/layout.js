import "@/app/globals.scss";
import "@/styles/tailwind.css"
import ThemeProvider from "@/utils/ThemeProvider";
import { AuthModalProvider } from "@/context/AuthModalContext";
import { AuthProvider } from "@/context/AuthContext";
import { inter, noto, poppins, ubuntu } from "@/font/fonts";

export const metadata = {
  title: "Flollama – Your AI Chat Assistant",
  description:
    "Flollama is a modern AI chatbot built using Ollama + Next.js. Chat with intelligence, speed, and style.",
  keywords: [
    "Flollama",
    "AI chatbot",
    "Ollama",
    "Next.js",
    "React AI",
    "LLaMA 3",
    "open-source chatbot",
  ],
  authors: [{ name: "Pratyush Kumar", url: "https://github.com/pratyush0898" }],
  creator: "Flollama Team",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Flollama – Your AI Chat Assistant",
    description:
      "Open-source, private, fast chatbot using Ollama LLaMA 3 + Next.js + Tailwind.",
    url: "https://flollama.ai",
    siteName: "Flollama",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flollama Chatbot",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`app-body ${inter.variable} ${poppins.variable} ${ubuntu.variable} ${noto.variable}`}
      >
        <ThemeProvider>
          <AuthModalProvider>
            <AuthProvider>{children}</AuthProvider>
          </AuthModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
