import Container from "@/components/Container";

const services = [
  {
    title: "Webentwicklung",
    text: "Moderne WordPress-Websites mit klarer Struktur, hoher Performance und AI-Optimierung.",
    link: "/web-development",
  },
  {
    title: "AI SEO & Promotion",
    text: "SEO-Optimierung, technische Struktur, Content-Architektur und AI Overviews Optimierung.",
    link: "/seo",
  },
  {
    title: "Betreuung & Wartung",
    text: "Updates, Sicherheit, Backups und fortlaufende Optimierung.",
    link: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-brand text-black relative">
      {/* Soft shadow on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />

      <Container>
        <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
          Unsere Leistungen
        </h2>

        <p className="text-black/80 max-w-2xl mb-12 text-lg">
          Wir entwickeln digitale Lösungen, die moderne UX, sauberen Code und
          KI-freundliche Struktur miteinander verbinden.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="
                bg-white shadow-xl rounded-xl2 p-6 border border-black/10
                hover:scale-105 hover:shadow-2xl transition-all duration-300
                hover:border-black
              "
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-black/70 mb-4">{s.text}</p>
              <span className="text-black font-medium underline underline-offset-4">
                Mehr erfahren →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

