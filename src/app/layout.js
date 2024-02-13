import { Inter } from "next/font/google";
import "./globals.scss";
import { Navbar, Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vet Magic",
  description: "Created by Aelita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <Navbar />
          <div className="wrapper">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
