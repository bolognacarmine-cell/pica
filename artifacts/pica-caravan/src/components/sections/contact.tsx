import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Richiesta inviata con successo",
        description: "Il nostro team ti contatterà al più presto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Contatti
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto a Partire?
          </h3>
          <p className="text-lg text-foreground/70">
            Passa a trovarci o inviaci una richiesta per scoprire il veicolo perfetto per la tua prossima avventura.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-8 md:p-12 rounded-3xl"
          >
            <h4 className="text-2xl font-bold font-serif mb-8">Parla con Noi</h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Telefoni</h5>
                  <a href="tel:3332327592" className="block text-foreground/80 hover:text-primary transition-colors text-lg">333 2327592</a>
                  <a href="tel:0823224038" className="block text-foreground/80 hover:text-primary transition-colors text-lg">0823 224038</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Indirizzo</h5>
                  <p className="text-foreground/80 text-lg">San Nicola la Strada (CE),<br/>Italia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Orari di Apertura</h5>
                  <p className="text-foreground/80">Lun – Ven: 9:00 – 13:00 / 15:30 – 19:30</p>
                  <p className="text-foreground/80">Sab: 9:00 – 13:00</p>
                  <p className="text-foreground/80">Dom: Chiuso</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl h-full">
              <h4 className="text-2xl font-bold font-serif mb-8">Richiesta Online</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome e Cognome</Label>
                  <Input id="name" placeholder="Inserisci il tuo nome" required className="bg-background" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tua@email.it" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono</Label>
                    <Input id="phone" type="tel" placeholder="Il tuo numero" required className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Come possiamo aiutarti?" 
                    rows={4}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
