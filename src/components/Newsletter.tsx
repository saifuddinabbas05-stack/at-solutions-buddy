import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
});

export const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const validatedData = newsletterSchema.parse({ email });
      
      // For now, we'll show a success message
      // When Lovable Cloud is connected, this will save to database
      console.log("Newsletter signup:", validatedData);
      
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest AI insights and updates.",
      });

      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Stay Updated</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get AI insights delivered to your inbox
            </h2>
            <p className="text-xl text-muted-foreground">
              Join SMB leaders learning how to leverage AI. Tips, case studies, and product updates—no spam.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`h-12 ${error ? "border-destructive" : ""}`}
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-sm text-destructive mt-2 text-left">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="group h-12 px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Weekly insights. Unsubscribe anytime.
            </p>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">SMB subscribers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">AI insights</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">0 Spam</div>
              <div className="text-sm text-muted-foreground">Just value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
