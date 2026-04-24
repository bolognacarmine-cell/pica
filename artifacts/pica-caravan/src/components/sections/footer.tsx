import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-foreground/70 max-w-sm">
              Concessionario camper e roulotte, centro assistenza specializzato e rimessaggio sicuro a Caserta.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold font-serif text-lg mb-6">Esplora</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#veicoli" className="text-foreground/70 hover:text-primary transition-colors">Parco Veicoli</a></li>
              <li><a href="#servizi" className="text-foreground/70 hover:text-primary transition-colors">Servizi & Officina</a></li>
              <li><a href="#azienda" className="text-foreground/70 hover:text-primary transition-colors">Azienda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-serif text-lg mb-6">Contatti</h4>
            <ul className="space-y-3 text-foreground/70">
              <li>San Nicola la Strada (CE), Italia</li>
              <li><a href="tel:3332327592" className="hover:text-primary transition-colors">Tel: 333 2327592</a></li>
              <li><a href="tel:0823224038" className="hover:text-primary transition-colors">Officina: 0823 224038</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>© 2026 Pica Caravan — Tutti i diritti riservati.</p>
          <p>P.IVA: IT01234567890</p>
        </div>
      </div>
    </footer>
  );
}
