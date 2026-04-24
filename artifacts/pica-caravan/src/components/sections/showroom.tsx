import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VEHICLES = [
  {
    id: 1,
    title: "Adria Twin Supreme 640 SLB",
    type: "Van",
    condition: "Usato",
    price: "62.000,00 €",
    year: "2022",
    km: "25.000",
    image: "/images/van.png",
  },
  {
    id: 2,
    title: "Knaus Sport 500 QDK",
    type: "Roulotte",
    condition: "Nuovo",
    price: "28.500,00 €",
    year: "2024",
    km: "0",
    image: "/images/roulotte.png",
  },
  {
    id: 3,
    title: "Hymer B-Class ModernComfort",
    type: "Motorhome",
    condition: "Usato",
    price: "95.000,00 €",
    year: "2023",
    km: "12.000",
    image: "/images/motorhome.png",
  },
];

export function Showroom() {
  const [activeFilter, setActiveFilter] = useState("Tutti");
  const [activeCategory, setActiveCategory] = useState("Tutte le categorie");

  const filters = ["Tutti", "Nuovo", "Usato", "Offerte"];
  const categories = ["Tutte le categorie", "Motorhome", "Roulotte", "Van"];

  return (
    <section id="veicoli" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Showroom
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Parco Camper e Roulotte
          </h3>
          <p className="text-lg text-foreground/70">
            Scopri la nostra selezione di veicoli nuovi e usati, garantiti per accompagnarti in ogni tua avventura.
          </p>
        </div>

        {/* Visual Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-background border border-border text-foreground hover:border-primary/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-background border border-border text-foreground hover:bg-secondary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant={vehicle.condition === "Nuovo" ? "default" : "secondary"} className="uppercase tracking-wider text-xs">
                      {vehicle.condition}
                    </Badge>
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-none">
                      {vehicle.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold font-serif leading-tight">{vehicle.title}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Anno</span>
                      <span className="font-medium">{vehicle.year}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Chilometri</span>
                      <span className="font-medium">{vehicle.km} km</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {vehicle.price}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground" variant="secondary">
                    Vedi Dettagli <Info className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="px-8 border-primary/30 hover:border-primary text-base h-14">
            Vedi tutto il parco veicoli <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
