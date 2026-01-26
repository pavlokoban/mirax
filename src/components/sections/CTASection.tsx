import Container from "@/components/Container";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-black pointer-events-none" />

      <Container>
        <div className="
          relative z-10 bg-black/60 rounded-2xl p-10 border border-slate-800 
          shadow-card hover:shadow-brand transition backdrop-blur-lg
        ">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            Bereit für eine moderne, KI-freundliche Website?
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
            Lassen Sie uns unverbindlich über Ihr Projekt sprechen. Wir analysieren
            Ihre aktuelle Situation und entwickeln eine klare Strategie für
            Website, SEO und KI-optimierte Inhalte.
          </p>

          <a
            href="/kontaktdaten"
            className="
              inline-block px-8 py-4 bg-brand text-black font-semibold 
              rounded-xl2 shadow-brand hover:bg-brand-light transition
            "
          >
            Kontakt aufnehmen
          </a>
        </div>
      </Container>
    </section>
  );
}

