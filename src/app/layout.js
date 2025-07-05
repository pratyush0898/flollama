import ThemeToggle from '@/components/ThemeToggle';
import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
