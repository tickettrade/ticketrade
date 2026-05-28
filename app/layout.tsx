import type { Metadata } from "next";
import { Heebo, Secular_One } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

const secularOne = Secular_One({
  subsets: ["hebrew", "latin"],
  weight: "400",
  variable: "--font-secular-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TicketTrade",
  description: "רשימת ההמתנה לזירת הסחר החדשה לאוהדי כדורגל",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${secularOne.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
