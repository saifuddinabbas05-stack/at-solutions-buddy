import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Solutions } from "@/components/Solutions";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import { DemoBookingForm } from "@/components/DemoBookingForm";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="liquid-glass-bg" />
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
        <Hero />
        <Stats />
        <Solutions />
        <Industries />
        <Pricing />
        <DemoBookingForm />
        <Newsletter />
        <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
