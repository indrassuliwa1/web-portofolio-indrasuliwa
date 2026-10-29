import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { LinkedinIcon } from "../ui/Icons";
import { PERSONAL_INFO } from "../../utils/sectionData";

const elasticPopVariant = {
  hidden: { opacity: 0, scale: 0.85, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Contact() {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=Halo%20Indra%20Suliwa,%20saya%20tertarik%20dengan%20portofolio%20Anda.`;

  return (
    <SectionWrapper
      id="contact"
      badge="Kontak"
      title="Mari Terhubung"
      subtitle="Terbuka untuk peluang kerja Full Stack Developer, kolaborasi proyek, dan konsultasi teknologi web."
    >
      <motion.div
        variants={elasticPopVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <GlassCard className="p-8 sm:p-10 space-y-8" variant="glowing">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-5 rounded-xl bg-purple-950/50 border border-white/10 hover:border-purple-400/40 hover:bg-purple-900/40 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-purple-300/60 uppercase font-mono">Email Pribadi</div>
                <div className="font-heading font-semibold text-white text-sm sm:text-base truncate group-hover:text-purple-300 transition-colors">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            {/* Phone / WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl bg-purple-950/50 border border-white/10 hover:border-cyan-400/40 hover:bg-purple-900/40 transition-all group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-purple-300/60 uppercase font-mono">Telepon & WhatsApp</div>
                <div className="font-heading font-semibold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-purple-200/80 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>linkedin.com/in/indrasuliwa</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <div className="flex items-center gap-3">
              <Button
                variant="glass"
                size="md"
                icon={MessageSquare}
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                WhatsApp
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={Send}
                onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`)}
              >
                Kirim Email
              </Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}
