import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/app/providers";
import "@cordystackx/cordy_minikit/dist/css/UI_Comp/styles.module.css";


export const metadata: Metadata = {
  title: "AskVerse",
  description: "Develop by CordyStackx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
