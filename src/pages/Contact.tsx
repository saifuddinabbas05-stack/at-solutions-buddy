import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-serif)" }}>
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12" style={{ fontFamily: "var(--font-sans)" }}>
              Get in touch with our team to discuss how we can help transform your business with AI solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-2">Reach out to our co-founders directly:</p>
                    <a href="mailto:saif@atsolutionsai.com" className="text-primary hover:underline block">
                      saif@atsolutionsai.com
                    </a>
                    <a href="mailto:huzefa@atsolutionsai.com" className="text-primary hover:underline block">
                      huzefa@atsolutionsai.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      A&T AI Solutions LLC<br />
                      New Jersey, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                Schedule a Demo
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a 20-minute demo to see our AI solutions in action and discuss your specific business needs.
              </p>
              <button 
                onClick={() => navigate('/#book-demo')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
