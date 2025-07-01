import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/components/providers/query-provider';

export const metadata: Metadata = {
  title: 'Get Medica',
  description: 'APp for booking doctors appointments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
