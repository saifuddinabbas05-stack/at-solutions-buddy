import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Solutions } from "@/components/Solutions";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        <Stats />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
