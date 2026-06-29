import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proxzFont = localFont({
  src: [
    {
      path: "../../Font/ProxzFont_Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_ExtraThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../Font/ProxzFont_ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proxz",
});

const proxzExtraBoldFont = localFont({
  src: [
    {
      path: "../../Font/ProxzFont_ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proxz-extrabold",
});

export const metadata: Metadata = {
  title: "CATALYST — Portal for Waste Management & Societal Benefits",
  description:
    "Our platform simplifies the process of waste management and societal benefits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proxzFont.variable} ${proxzExtraBoldFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
