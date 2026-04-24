import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full md:w-auto"
          >
            <span className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">30+</span>
            <span className="text-sm md:text-base font-medium tracking-widest uppercase text-foreground/70">Anni di Esperienza</span>
          </motion.div>
          
          <div className="hidden md:block w-px h-16 bg-border" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center w-full md:w-auto"
          >
            <span className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">100%</span>
            <span className="text-sm md:text-base font-medium tracking-widest uppercase text-foreground/70">Clienti Soddisfatti</span>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center w-full md:w-auto"
          >
            <span className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">500+</span>
            <span className="text-sm md:text-base font-medium tracking-widest uppercase text-foreground/70">Veicoli Venduti</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
