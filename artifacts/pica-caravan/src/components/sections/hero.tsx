import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Camper at sunset on the Italian coast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-primary font-medium tracking-wider text-sm md:text-base mb-4 uppercase"
          >
            <MapPin className="h-4 w-4" />
            <span>Vendita e Rimessaggio a San Nicola la Strada</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
          >
            Camper e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Roulotte
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            Vendita nuovo e usato garantito, assistenza specializzata e rimessaggio sicuro a Caserta. La tua avventura inizia da qui.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Richiedi informazioni
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 border-primary/20 hover:bg-primary/10">
              Catalogo Veicoli <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
