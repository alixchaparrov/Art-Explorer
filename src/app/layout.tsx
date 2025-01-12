import "./globals.css";

export const metadata = {
  title: "Art Explorer",
  description: "Explora las mejores obras de arte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
