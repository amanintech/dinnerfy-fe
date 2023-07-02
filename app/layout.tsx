import "./globals.css";

export const metadata = {
  title: "Dinnerfy",
  description: "Find the best dinner ideas and save your time and money.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-green-50">{children}</body>
    </html>
  );
}
