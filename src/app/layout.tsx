import { type PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";

import Footer from "@/components/partials/footer";
import { Header } from "@/components/partials/header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nghienphim.online",
    default: "Danh sách phim mới nhất | Nghienphim.online",
  },
  description: "Nghienphim.online | Web xem phim miễn phí tốc độc cao",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export { fontSans };
