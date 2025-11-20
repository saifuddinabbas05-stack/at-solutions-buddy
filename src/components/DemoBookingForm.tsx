import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const demoFormSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(10, "Your message should be at least 10 characters").max(1000),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

export const DemoBookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<DemoFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = demoFormSchema.parse(formData);
      
      // Send to backend API
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: validatedData.email,
          message: validatedData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success message
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon. Thank you!",
      });

      // Reset form
      setFormData({ email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof DemoFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof DemoFormData] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="book-demo">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
            <p className="text-muted-foreground">
              Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={errors.email ? 'border-destructive' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message || ''}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    disabled={isSubmitting}
                    style={errors.message ? { borderColor: 'hsl(0, 84.2%, 60.2%)' } : {}}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book My Demo"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                We respect your privacy and will only use your information to schedule your demo.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
