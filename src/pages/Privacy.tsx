import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last Updated: November 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A&T AI Solutions LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information and business details</li>
                  <li>Communications with our team</li>
                  <li>Usage data and analytics from our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you technical notices and updates</li>
                  <li>Analyze usage patterns and optimize our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-primary mt-2">
                  <a href="mailto:saif@atsolutionsai.com" className="hover:underline">saif@atsolutionsai.com</a> or{" "}
                  <a href="mailto:huzefa@atsolutionsai.com" className="hover:underline">huzefa@atsolutionsai.com</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
