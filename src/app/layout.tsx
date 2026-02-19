import './globals.css'
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import { Funnel_Display } from 'next/font/google';
import { Philosopher } from 'next/font/google';
import { Montserrat } from "next/font/google";
import ClientEffects from "@/components/ClientEffects";
import {
  Poiret_One,
  Cormorant_Infant,
  Cormorant_SC,
  Cormorant_Unicase,
  Geologica,
} from "next/font/google";


export const metadata = {
  title: "Mirax Digital – разработка сайтов WordPress, оптимизированные для ИИ | Москва",
  description:
    "Разработка сайтов в Москве: мы создаём сайты, которые рекомендуют Алиса, Gemini и другие ИИ-системы — так же, как раньше это делал Яндекс SEO",
  openGraph: {
    title: "Mirax Digital – разработка сайтов WordPress, оптимизированные для ИИ | Москва",
    description:
      "Разработка сайтов в Москве: мы создаём сайты, которые рекомендуют Алиса, Gemini и другие ИИ-системы — так же, как раньше это делал Яндекс SEO",
    url: "https://mirax-digital.ru/",
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
export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
export const poiret = Poiret_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-poiret",
  display: "swap",
});

export const cormorantInfant = Cormorant_Infant({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-infant",
  display: "swap",
});

export const cormorantSC = Cormorant_SC({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-cormorant-sc",
  display: "swap",
});

export const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-cormorant-unicase",
  display: "swap",
});

export const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geologica",
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`
    ${poiret.variable}
    ${cormorantInfant.variable}
    ${cormorantSC.variable}
    ${cormorantUnicase.variable}
    ${geologica.variable}
    antialiased
  `}>
      {/* <body className="font-base bg-slate-950 text-black"> */}
       <body className="font-base bg-slate-50 text-black">
        <ClientEffects>
        {/* <Header /> */}
        <Header />
          <main>{children}</main>
          <CookieBanner />
        <Footer />
         </ClientEffects>
      </body>
    </html>
  )
}
