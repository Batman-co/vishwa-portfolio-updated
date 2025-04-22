import { Montserrat} from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Progressbar from "./Progressbar";
import { Analytics } from "@vercel/analytics/react"

const mon = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight:["100","200","300","400"]
});



export const metadata = {
  title: "Vishwa's portfolio",
  description: "I welcome you to my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mon.variable} antialiased`}
      >
        <Analytics />
        <Progressbar />
        <Nav />
        {children}
      </body>
    </html>
  );
}
 