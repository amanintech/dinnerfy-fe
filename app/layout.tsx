import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dinnerfy Assignment",
  description: "Making The World Better One Shared Dinner at a Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " before:bg-[url('/bg.svg')] before:content-[''] before:bg-center before:bg-no-repeat before:block before:inset-0 before:fixed before:bg-cover "
        }
      >
        {children}
      </body>
    </html>
  );
}
