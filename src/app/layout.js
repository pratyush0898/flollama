import "@/app/globals.scss";
import "@/styles/tailwind.css";
import ThemeProvider from "@/utils/ThemeProvider";
import { AuthModalProvider } from "@/context/AuthModalContext";
import { AuthProvider } from "@/context/AuthContext";
import { inter, noto, poppins, ubuntu } from "@/font/fonts";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Flollama – Your AI Chat Assistant",
  description:
    "Flollama is an open-source AI chatbot built with Ollama and Next.js. Experience private, fast, and stylish AI chats powered by LLaMA 3.",
  keywords: [
    "Flollama",
    "AI chatbot",
    "Ollama",
    "Next.js",
    "React AI",
    "LLaMA 3",
    "open-source chatbot",
    "AI Assistant",
    "private AI",
    "fast chatbot",
    "Tailwind CSS",
  ],
  authors: [{ name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app/" }],
  creator: "Pratyush Kumar",
  robots: "index, follow",
  metadataBase: new URL("https://flollama.in"),

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/og-image.png", type: "image/png", sizes: "1200x630" },
    ],
    apple: "/favicon.svg",
  },

  openGraph: {
    title: "Flollama – Your AI Chat Assistant",
    description:
      "Open-source, private, fast chatbot using Ollama LLaMA 3 + Next.js + Tailwind.",
    url: "https://flollama.in",
    siteName: "Flollama",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flollama Chatbot",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flollama – Your AI Chat Assistant",
    description:
      "Flollama is a blazing-fast, privacy-first chatbot powered by LLaMA 3 and Ollama, built with Next.js.",
    images: ["/og-image.png"],
    creator: "@nvmpratyush",
  },

  verification: {
    google: "jRUy_ry4PSX-sDVpjn9c4bc-eVC5f_w4E5IVyTepHC8", // Use your actual GSC verification code
  },

  other: {
    "geo.region": "IN-CT",
    "geo.placename": "Durg, Chhattisgarh",
    "geo.position": "21.1905;81.2849",
    ICBM: "21.1905, 81.2849",
    "revisit-after": "7 days",
    language: "English",
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
