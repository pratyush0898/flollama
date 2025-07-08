import { Inter, Poppins, Ubuntu, Noto_Sans } from "next/font/google";
import "./globals.scss";
import Sidebar from "@/components/Sidebar.jsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const noto = Noto_Sans({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "devanagari",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-noto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
