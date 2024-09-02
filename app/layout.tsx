import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/forms/ui/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarePlus",
  description: "A Healthcare CMS Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
