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
      <body className="border-2 border-amber-500">
        <div>Main layout</div>
        {children}
      </body>
    </html>
  );
}
