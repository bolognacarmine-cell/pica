import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Showroom } from "@/components/sections/showroom";
import { Services } from "@/components/sections/services";
import { Partners } from "@/components/sections/partners";
import { Storage } from "@/components/sections/storage";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Showroom />
        <Services />
        <Partners />
        <Storage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
