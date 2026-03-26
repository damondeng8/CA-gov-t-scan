import "./globals.css";
import type { Metadata } from "next";
import { LayoutFooter } from "@/components/layout-footer";
import { LayoutHeader } from "@/components/layout-header";

export const metadata: Metadata = {
  title: "Civic Ledger",
  description: "Evidence-first spending explorer for Canada"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutHeader />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <LayoutFooter />
      </body>
    </html>
  );
}
