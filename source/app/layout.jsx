import { Inter } from "next/font/google";
import "../styles/multi-family-project.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}>
            <main role="main" className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
                    {children}
            </main>
        </body>
    </html>
  );
}
