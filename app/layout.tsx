import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dinnerfy",
  description: "Dinnerfy Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[url('/bg.svg')] bg-no-repeat w-screen h-screen bg-fixed bg-cover bg-center overflow-x-hidden">
        <main className="w-[min(1024px,_100%)] mx-auto">{children}</main>
      </body>
    </html>
  );
}
