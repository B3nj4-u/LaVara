import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreeBackground from '@/components/TreeBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Escuela La Vara',
  description: 'Sitio web oficial de Escuela La Vara',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <TreeBackground>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TreeBackground>
      </body>
    </html>
  );
}