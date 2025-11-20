import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FrostyLabs - Automate Crypto Research in Minutes | AI Blockchain Workflows",
  description: "Build AI workflows that analyze tokens, track wallets, and automate DeFi trading across 35+ networks. No-code automation for crypto traders. Free beta launching December 2025.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/resources/penguin-mascot.png" />
        <link rel="apple-touch-icon" href="/resources/penguin-mascot.png" />
      </head>
      <body className={`${orbitron.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
