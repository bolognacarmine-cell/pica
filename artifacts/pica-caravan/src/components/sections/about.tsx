import { motion } from "framer-motion";
import { Compass, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="azienda" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
                L'Azienda
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Pica Caravan: In Movimento
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Situata a San Nicola la Strada, Pica Caravan è il punto di riferimento per gli amanti del plein air. Guidata da Antimo Pica, offriamo soluzioni complete per ogni esigenza.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                Siamo orgogliosi di essere Concessionario Across Car e centro assistenza autorizzato per i migliori brand del settore come Viesa, Thetford e Webasto.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold font-serif">Su Misura</h4>
                <p className="text-foreground/70">
                  Consulenza dedicata per il primo camper o roulotte, per trovare il compagno di viaggio perfetto.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold font-serif">Affidabilità</h4>
                <p className="text-foreground/70">
                  Nome storico, fiducia e trasparenza in ogni trattativa e servizio di assistenza.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/van.png"
                alt="Modern camper van"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-card border border-border p-6 rounded-2xl hidden md:flex flex-col justify-center items-center text-center shadow-xl">
              <span className="text-4xl font-serif font-bold text-primary mb-2">30</span>
              <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">Anni di<br/>Passione</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
