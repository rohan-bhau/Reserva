
import { inter, poppins } from "@/fonts/font";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import { Toaster } from "react-hot-toast";



export const metadata = {
  title: "Reserva",
  description: "Reserva a modern and best sports facilities booking platform in Bangladesh where users can book facilities according their need.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body
        className={`${poppins.variable} ${inter.variable} min-h-full flex flex-col`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
