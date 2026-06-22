import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Detacars | Şeffaf Araç Alım, Satış ve Takas',
  description: 'Premium ve orta üst segment araçlarda şeffaf değerlendirme, güvenilir alım, satış ve takas çözümleri. Detacars Otomotiv Sanayi ve Ticaret Limited Şirketi.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
