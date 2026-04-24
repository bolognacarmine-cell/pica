import { motion } from "framer-motion";
import { Shield, Warehouse, MapPin } from "lucide-react";

export function Storage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/storage.png"
              alt="Rimessaggio camper sicuro a Caserta"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-card/90 backdrop-blur-md rounded-xl border border-border/50 flex gap-4 items-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <Warehouse className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Spazi Coperti e Scoperti</h4>
                <p className="text-sm text-foreground/70">Struttura monitorata H24</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
                Rimessaggio
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Il porto sicuro per il tuo veicolo
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Proteggi il tuo investimento tra un viaggio e l'altro. La nostra area di rimessaggio a Caserta offre spazi ampi, sicuri e facilmente accessibili, sia al coperto che allo scoperto.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                L'intera area è protetta da un sistema di videosorveglianza di ultima generazione e accessi controllati, per garantirti la massima tranquillità. Riparti quando vuoi, con il veicolo sempre pronto all'uso.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-lg font-medium">
                <Shield className="h-6 w-6 text-primary" /> Videosorveglianza attiva 24/7
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <MapPin className="h-6 w-6 text-primary" /> Posizione strategica vicino allo svincolo
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
