import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const gordita = localFont({
  src: [
    {
      path: '../../public/fonts/Gordita-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gordita-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gordita-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gordita',
});

export const metadata: Metadata = {
  title: "Snowball - The Savings App Built for Canadians",
  description: "Earn 25x more than a traditional savings account with Snowball, the innovative savings app designed specifically for Canadians.",
  keywords: "savings app, Canadian savings, high yield savings, investment app, financial technology, personal finance, Canada",
  authors: [{ name: "Snowball Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Snowball - The Savings App Built for Canadians",
    description: "Earn 25x more than a traditional savings account with Snowball, the innovative savings app designed specifically for Canadians.",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Snowball - The Savings App Built for Canadians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snowball - The Savings App Built for Canadians",
    description: "Earn 25x more than a traditional savings account with Snowball, the innovative savings app designed specifically for Canadians.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gordita.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
