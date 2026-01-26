import type { Metadata, Viewport } from "next";
import "./globals.css";
import TabBar from "@/components/ios/TabBar";

export const metadata: Metadata = {
  title: "OPN WRLD",
  description: "High-end street/creatives catering streetwear brand. Built for the community.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OPN WRLD",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-sans bg-background">
        <main className="min-h-full pb-20">
          {children}
        </main>
        <TabBar />
      </body>
    </html>
  );
}
