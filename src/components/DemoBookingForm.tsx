import { useEffect } from "react";

export const DemoBookingForm = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-background" id="book-demo" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="py-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground text-sm">
          Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/atsolutionsai/60min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
    </section>
  );
};
