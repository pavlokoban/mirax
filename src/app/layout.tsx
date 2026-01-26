import './globals.css'
import HeaderMain from "@/components/HeaderNew";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import { Funnel_Display } from 'next/font/google';
import { Philosopher } from 'next/font/google';
import ClientEffects from "@/components/ClientEffects";

export const metadata = {
  title: "Миракс – Разработка сайтов WordPress, оптимизированные для ИИ | Москва",
  description:
    "Миракс spezialisiert sich auf KI-freundliche WordPress-Webentwicklung, technische SEO und AI-Optimierung für Unternehmen in Deutschland und Frankfurt am Main.",
  openGraph: {
    title: "Миракс – KI-freundliche WordPress-Websites & AI SEO",
    description:
      "Webentwicklung, SEO und AI-optimierte Websites für bessere Sichtbarkeit in Google & AI Overviews.",
    url: "https://mirax-amber.vercel.app/",
    siteName: "Миракс",
    locale: "ru_RU",
    type: "website",
  },
};


const funnel = Funnel_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});
const philosopher = Philosopher({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${philosopher}`}>
      {/* <body className="font-base bg-slate-950 text-black"> */}
       <body className="font-base bg-slate-50 text-black">
        <ClientEffects>
        {/* <Header /> */}
        <HeaderMain />
          <main>{children}</main>
          <CookieBanner />
        <Footer />
         </ClientEffects>
      </body>
    </html>
  )
}
