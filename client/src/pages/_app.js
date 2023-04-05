// This file (component) is used to initialize the pages
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
      {/* active page */}
      <Component {...pageProps} />
    </main>
  );
}
