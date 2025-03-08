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
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          <div>
            {/* navbar */}
            <Navbar />

            {children}

            {/* footer */}
            <Footer />
          </div>
        </Providers>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
          defer
        ></script>
      </body>
    </html>
  );
}
