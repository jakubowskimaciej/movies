import type { Metadata } from 'next';
import '@/app/globals.css';
import { montserrat } from '@/components/ui/fonts';

export const metadata: Metadata = {
  title: 'Movies Library',
  description: 'A movie library', //change later
  icons: {
    icon: '/icons/logo.svg', //change later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>{children}</body>
    </html>
  );
}
