import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Detacars | Premium Araç Alım',
  description: 'Premium ve orta üst segment araçlarda hızlı, güvenilir ve sorunsuz alım süreci.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
