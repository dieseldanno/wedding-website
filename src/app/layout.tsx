import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '<3',
  description: '25 juli 2027 - Marwa & Eliza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
