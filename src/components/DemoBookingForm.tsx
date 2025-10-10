import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, ArrowRight } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const demoFormSchema = z.object({
  companyName: z.string().trim().min(2, "Company name must be at least 2 characters").max(100),
  contactName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  industry: z.string().min(1, "Please select an industry"),
  employeeCount: z.string().min(1, "Please select employee count"),
  interestedSku: z.string().min(1, "Please select a solution"),
  primaryProblem: z.string().trim().min(10, "Please describe your problem (at least 10 characters)").max(500),
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
      
      // Save to database
      const { error: dbError } = await supabase
        .from('demo_requests')
        .insert({
          company_name: validatedData.companyName,
          contact_name: validatedData.contactName,
          email: validatedData.email,
          phone: validatedData.phone,
          industry: validatedData.industry,
          team_size: validatedData.employeeCount,
          interested_solution: validatedData.interestedSku,
          primary_problem: validatedData.primaryProblem,
        });

      if (dbError) throw dbError;
      
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your demo.",
      });

      // Reset form
      setFormData({});
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
    <section className="py-24 bg-background" id="book-demo">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Book Your Demo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's discuss your AI journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a 20-minute demo and see how our solutions can transform your business
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName || ""}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Your Company Inc."
                    className={errors.companyName ? "border-destructive" : ""}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive">{errors.companyName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">Your Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName || ""}
                    onChange={(e) => updateField("contactName", e.target.value)}
                    placeholder="John Doe"
                    className={errors.contactName ? "border-destructive" : ""}
                  />
                  {errors.contactName && (
                    <p className="text-sm text-destructive">{errors.contactName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@company.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    value={formData.industry || ""}
                    onValueChange={(value) => updateField("industry", value)}
                  >
                    <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="home-services">Home Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Dental</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="auto">Auto Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <p className="text-sm text-destructive">{errors.industry}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Team Size *</Label>
                  <Select
                    value={formData.employeeCount || ""}
                    onValueChange={(value) => updateField("employeeCount", value)}
                  >
                    <SelectTrigger className={errors.employeeCount ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-10">6-10 employees</SelectItem>
                      <SelectItem value="11-25">11-25 employees</SelectItem>
                      <SelectItem value="26-50">26-50 employees</SelectItem>
                      <SelectItem value="51+">51+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.employeeCount && (
                    <p className="text-sm text-destructive">{errors.employeeCount}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestedSku">Which solution interests you? *</Label>
                <Select
                  value={formData.interestedSku || ""}
                  onValueChange={(value) => updateField("interestedSku", value)}
                >
                  <SelectTrigger className={errors.interestedSku ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select a solution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="invoice">Invoice Automation</SelectItem>
                    <SelectItem value="internal-ai">Internal AI Employee</SelectItem>
                    <SelectItem value="chatbot">MCP+RAG Web Chatbot</SelectItem>
                    <SelectItem value="voice">AI Voice Receptionist</SelectItem>
                    <SelectItem value="video">Multi-Platform Video Workflow</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interestedSku && (
                  <p className="text-sm text-destructive">{errors.interestedSku}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryProblem">What problem are you trying to solve? *</Label>
                <Textarea
                  id="primaryProblem"
                  value={formData.primaryProblem || ""}
                  onChange={(e) => updateField("primaryProblem", e.target.value)}
                  placeholder="Tell us about your current challenges..."
                  rows={4}
                  className={errors.primaryProblem ? "border-destructive" : ""}
                />
                {errors.primaryProblem && (
                  <p className="text-sm text-destructive">{errors.primaryProblem}</p>
                )}
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
