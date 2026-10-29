import React, { useState } from "react";
import { ChevronDown, ChevronUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const certificatesData = [
  {
    id: 1,
    title: "Cyber Security International",
    issuer: "International Cybersecurity Institute",
    date: "2024",
    image: "/Sertifikat/CERTIFIKAT CYBER SEC INTERNATIONAL.jpeg",
  },
  {
    id: 2,
    title: "Full Stack Web Development & Laravel ",
    issuer: "PT Air Consulting Group",
    date: "2026",
    image: "/Sertifikat/UNINUS_Sertifikat Magang PT AIR Consulting Group-AfterSchola (1)_page-0002.jpg",
  },
  {
    id: 3,
    title: "SERTIFIKAT MAGANG DAN STUDI INDEPENDEN BISA AI",
    issuer: "BISA AI",
    date: "2024",
    image: "/Sertifikat/SERTIFIKAT MAGANG DAN STUDI INDEPENDEN BISA AI (1)_page-0001.jpg",
  },
  {
    id: 4,
    title: "Mentor Web Devlopment",
    issuer: "ICC 2025",
    date: "2024",
    image: "/Sertifikat/Mentor.jpeg",
  },
  {
    id: 5,
    title: "Adaptability and Resilience as Essential Soft Skills",
    issuer: "Professional Development",
    date: "2024",
    image: "/Sertifikat/Adaptability_and_Resilience_as_Essential_Soft Skills.png",
  },
  {
    id: 6,
    title: "Deteksi Topik Dalam Dokumen Menggunakan BERTopic",
    issuer: "AI & NLP Academy",
    date: "2024",
    image: "/Sertifikat/Deteksi_Topik_Dalam_Dokumen_Menggunakan_BERTopic.png",
  },
  {
    id: 7,
    title: "Digital Privacy in the Modern Age",
    issuer: "Cybersecurity Academy",
    date: "2024",
    image: "/Sertifikat/Digital_Privacy_in_the_Modern_Age___Memperkuat_Keamanan_Sandi.png",
  },
  {
    id: 8,
    title: "Effective Short Video Creation with AI Tools",
    issuer: "Content Creation Institute",
    date: "2024",
    image: "/Sertifikat/Effective_Short_Video_Creation_with_Artificial_Intelligence_Tools__Image,_GIF,_Audio_AI.png",
  },
  {
    id: 9,
    title: "English as a Career Catalyst",
    issuer: "Language Learning Academy",
    date: "2024",
    image: "/Sertifikat/English_as_a_Career_Catalyst__Empowering_Professionals_in_the_Global_Workplace.png",
  },
  {
    id: 10,
    title: "How UI/UX Impact Your Business",
    issuer: "Design Excellence Center",
    date: "2024",
    image: "/Sertifikat/How_UIUX_Impact_Your_Business.png",
  },
  {
    id: 11,
    title: "Keamanan Online untuk Pemula",
    issuer: "Cyber Protection Institute",
    date: "2024",
    image: "/Sertifikat/Keamanan_Online_untuk_Pemula__Cara_Efektif_Melindungi_Diri_di_Internet.png",
  },
  {
    id: 12,
    title: "Kolaborasi Beberapa Tools Desain",
    issuer: "Design Tools Academy",
    date: "2024",
    image: "/Sertifikat/Kolaborasi_Beberapa_Tools_Desain_Untuk_Membuat_Sebuah_Content.png",
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 4);

  return (
    <SectionWrapper
      id="certifications"
      badge="Pencapaian"
      title="Sertifikasi & Penghargaan"
      subtitle="Berbagai sertifikasi profesional yang telah saya raih melalui pembelajaran berkelanjutan dan dedikasi dalam mengembangkan keahlian."
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Certificates Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {visibleCertificates.map((cert) => (
          <motion.div
            key={cert.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="relative h-full rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-600/20">
              {/* Certificate Image */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-purple-600/20 to-cyan-600/20">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Certificate Info */}
              <div className="p-5 sm:p-6 relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-purple-300" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-purple-200/80 font-medium">{cert.issuer}</p>
                  <p className="text-purple-300/60">{cert.date}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Button */}
      <motion.div
        className="flex justify-center mt-8 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base flex items-center gap-2 group"
        >
          {showAll ? (
            <>
              Tampilkan Lebih Sedikit
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </>
          ) : (
            <>
              Lihat Semua Pencapaian
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </motion.button>
      </motion.div>
    </SectionWrapper>
  );
}
