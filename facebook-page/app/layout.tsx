import "./globals.css";
import { Inter, JetBrains_Mono, Dancing_Script } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const signature = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} ${signature.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
