import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: 'swap',
  variable: '--font-roboto', 
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"], 
  display: 'swap',
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: "FastOrder- Cozinha - Monitor de Produção",
  description: "Monitor de pedidos da cozinha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}