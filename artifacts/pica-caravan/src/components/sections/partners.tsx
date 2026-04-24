import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Across Car", tag: "Concessionario Ufficiale" },
  { name: "Viesa", tag: "Service Center" },
  { name: "Thetford", tag: "Partner Tecnico" },
  { name: "Webasto", tag: "Assistenza Autorizzata" },
  { name: "Hymer", tag: "Rivenditore" },
  { name: "Knaus", tag: "Service Point" },
];

export function Partners() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-serif font-bold">
            Centro Assistenza & Rivenditore Autorizzato
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-xl min-w-[200px] shadow-sm hover:border-primary/40 transition-colors"
            >
              <span className="text-2xl font-bold tracking-tight mb-2 opacity-80">{partner.name}</span>
              <span className="text-xs uppercase tracking-widest text-primary/80 font-medium">{partner.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
