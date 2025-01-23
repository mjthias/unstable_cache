import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <nav className="flex gap-4 [&>a]:underline [&>a]:font-bold max-w-6xl mx-auto p-4">
          <Link href="/">Home</Link>
          <Link href="/forever">Forever</Link>
          <Link href="/10">lvl 1: 10</Link>
          <Link href="/sub/10">lvl 2: 10</Link>
          <Link href="/30">lvl 1: 30</Link>
          <Link href="/sub/30">lvl 2: 30</Link>
        </nav>
        <div className="max-w-6xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
