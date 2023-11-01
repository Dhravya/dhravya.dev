import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://dhravya.dev'),
  title: {
    default: 'Dhravya Shah',
    template: '%s | Dhravya Shah',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Dhravya Shah',
    description: 'Developer, writer, and creator.',
    url: 'https://dhravya.dev',
    siteName: 'Dhravya Shah',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Dhravya Shah',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <div className="flex self-center -z-50 blur-3xl">
        <div className="absolute rounded-full -top-44 left-1/3 bg-purple-600 h-64 w-64 blur-3xl transform -translate-x-1/3 z-0 opacity-50"></div>
        <div className="absolute rounded-full -top-44 left-1/2 bg-yellow-600 h-64 w-64 blur-3xl transform -translate-x-1/2 z-0 opacity-50 hidden md:block"></div>
        <div className="absolute rounded-full -top-44 left-2/3 bg-pink-600 h-64 w-64 blur-3xl transform -translate-x-2/3 z-0 opacity-50 hidden md:block"></div>
      </div>
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
