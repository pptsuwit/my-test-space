import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { GlobalContextProvider } from "@/context/store";

export const metadata: Metadata = {
  title: "frontend",
  description: "nnm-frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GlobalContextProvider>
          <Providers>{children}</Providers>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
