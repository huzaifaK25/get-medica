import type { Metadata } from 'next';
import HtmlHead from '@/components/html.head';
import './globals.css';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HtmlHead />
      <body>{children}</body>
    </html>
  );
}
