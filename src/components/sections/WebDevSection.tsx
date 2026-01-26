import Container from "@/components/Container";

export default function WebDevSection() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-black to-black pointer-events-none" />

      <Container>
        <div className="max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            Moderne Webentwicklung für nachhaltige Sichtbarkeit
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-12">
            Wir entwickeln WordPress-Websites, die nicht nur gut aussehen,
            sondern auch technisch überzeugen. Jede Seite folgt einer klaren
            Struktur, ist schnell, skalierbar und AI-optimiert.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Responsives Design für alle Geräte",
              "Modulare Komponenten & saubere Codebasis",
              "Conversion-orientierte UX",
              "Technische SEO ab dem ersten Tag",
            ].map((feature) => (
              <div
                key={feature}
                className="p-5 rounded-xl2 border border-slate-800 bg-black/60
                hover:border-brand transition shadow-card hover:shadow-brand"
              >
                <p className="text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

