import './globals.css';
import './reset.css';

import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Crypto Pro - crypto payments for telegram bots',
  description: 'Seamlessly accept crypto payments in your Telegram bots and services.',
  viewport: {
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
