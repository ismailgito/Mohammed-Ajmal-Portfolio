import { Anton, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohammed Ajmal A | Digital & Performance Marketing Portfolio",
  description:
    "Portfolio of Mohammed Ajmal A, a digital marketing professional in Chennai specialising in Meta Ads, Google Ads, lead generation, analytics and campaign management.",
  openGraph: {
    title: "Mohammed Ajmal A | Digital & Performance Marketing",
    description:
      "Meta Ads, Google Ads, lead generation and campaign analytics. Portfolio of Mohammed Ajmal A.",
    images: ["/profile-pic.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${greatVibes.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
