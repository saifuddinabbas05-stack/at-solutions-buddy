import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, FileCheck, Database } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Security & Data Processing Agreement
            </h1>
            <p className="text-sm text-muted-foreground mb-12">Last Updated: November 2025</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-level encryption and security protocols to protect your data
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Lock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Data Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption for data in transit and at rest
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <FileCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  GDPR, CCPA, and SOC 2 compliant data handling
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Data Ownership</h3>
                <p className="text-sm text-muted-foreground">
                  You retain full ownership and control of your data
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>Data Processing Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Data Processing Agreement ("DPA") forms part of the service agreement between A&T AI Solutions LLC ("Processor") and the client ("Controller") for the provision of AI automation services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>1. Data Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process data solely for the purpose of providing our services and in accordance with your instructions. We implement appropriate technical and organizational measures including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>2. Data Subject Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We assist you in responding to data subject requests, including access, rectification, erasure, and data portability requests, in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>3. Subprocessors</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may engage third-party subprocessors to assist in providing our services. Current subprocessors include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
                  <li>AI model providers (OpenAI, Anthropic)</li>
                  <li>Analytics and monitoring services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>4. Data Breach Notification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of a data breach, we will notify you without undue delay and no later than 72 hours after becoming aware of the breach, providing all relevant information to assess the impact.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>5. Data Deletion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination of services or upon your request, we will delete or return all personal data in our possession within 30 days, unless retention is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>6. Audit Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to audit our compliance with this DPA. We provide annual SOC 2 reports and will cooperate with reasonable audit requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>Contact for Security Matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For security-related inquiries or to report a security concern, please contact:
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

export default Security;
