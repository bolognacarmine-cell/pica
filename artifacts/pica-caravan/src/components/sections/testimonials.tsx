import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Marco Rossi",
    role: "Camperista dal 2010",
    text: "Ho acquistato il mio secondo camper da Pica. Antimo e il suo team sono professionisti veri: competenti, onesti e sempre disponibili anche nel post-vendita.",
  },
  {
    name: "Giulia Esposito",
    role: "Prima Roulotte",
    text: "Cercavamo la nostra prima roulotte ed eravamo pieni di dubbi. Ci hanno guidato passo passo verso la scelta giusta. Servizio impeccabile e rimessaggio sicurissimo.",
  },
  {
    name: "Antonio De Luca",
    role: "Cliente Officina",
    text: "L'officina è il loro fiore all'occhiello. Hanno risolto un problema al riscaldamento del mio motorhome in tempi record prima di una partenza importante. Consigliatissimi.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card/20 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Testimonianze
          </h2>
          <h3 className="text-4xl font-bold">
            Cosa Dicono i Nostri Clienti
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-card border-border/50 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />
                  <p className="text-lg text-foreground/90 italic mb-8 grow">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-bold font-serif">{t.name}</p>
                      <p className="text-sm text-foreground/60">{t.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
