import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// import providers
import { Providers } from "./providers";

// import components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Thrift and Thrive",
  description: "Your thrift shopping destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>

          {/* navbar */}
          <Navbar />

          {children}

        </Providers>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
