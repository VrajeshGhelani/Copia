import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copia Water | Ultra Pure. Ultra Premium.",
  description: "Experience the futuristic hydration with Copia Water. Premium quality drinking water delivered fresh and pure with state-of-the-art tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-primary selection:text-white min-h-screen overflow-x-hidden transition-colors duration-700`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <WhatsAppButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
