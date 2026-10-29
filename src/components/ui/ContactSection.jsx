import React from "react";
import { Send } from "lucide-react";
import GlassCard from "./GlassCard";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section id="contact-section" className="scroll-mt-24">
      <GlassCard className="p-8 sm:p-12" variant="glowing">
        <div className="max-w-xl mx-auto text-center space-y-5">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Ready to Launch a Project?
          </h2>
          <p className="text-sm text-purple-200/70 leading-relaxed font-sans">
            Whether you need custom Three.js visuals, an interactive web experience,
            or senior frontend architecture, let's connect across the stars.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={Send}
              onClick={() => window.open("mailto:indra@example.com")}
            >
              Transmit Message
            </Button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
