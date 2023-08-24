import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DynamicContextProvider, DynamicWagmiConnector } from "../lib/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed",
        }}
      >
        <DynamicWagmiConnector>
          <body className={inter.className}>{children}</body>
        </DynamicWagmiConnector>
      </DynamicContextProvider>
    </html>
  );
}