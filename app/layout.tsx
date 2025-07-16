
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Interface Greg V5',
  description: 'Interface simbiótica do Greg'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
