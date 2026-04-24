import { motion } from "framer-motion";
import { Wrench, CheckCircle, PenTool, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: PenTool,
    title: "Soluzioni Su Misura",
    description: "Personalizziamo il tuo camper con accessori premium e configurazioni uniche, create apposta per te.",
  },
  {
    icon: CheckCircle,
    title: "Massima Affidabilità",
    description: "Garanzia di qualità su tutti i veicoli e assistenza tecnica specializzata per viaggiare senza pensieri.",
  },
  {
    icon: Wrench,
    title: "Assistenza Completa",
    description: "Officina specializzata, ricambi originali e supporto tecnico per ogni tua esigenza.",
  },
];

export function Services() {
  return (
    <section id="servizi" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            I Nostri Servizi
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Soluzioni complete per il tuo viaggio
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold font-serif mb-4">{service.title}</h4>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-card to-card/50 border border-primary/20 p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/5"
        >
          <div className="lg:w-2/3 text-center lg:text-left">
            <h4 className="text-2xl font-bold mb-3">Officina & Ricambi</h4>
            <p className="text-lg text-foreground/80">
              Hai bisogno di assistenza o accessori? Il nostro team tecnico è a tua disposizione per appuntamenti e consulenze veloci.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90" asChild>
              <a href="tel:0823224038">
                <PhoneCall className="mr-2 h-5 w-5" /> Chiama Officina
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-primary/30 hover:border-primary" asChild>
              <a href="https://wa.me/390823224038" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
