import type { Metadata } from "next";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prestasi & Publikasi — Dimas Respati",
  description: "Juara 2 International Business Plan Competition dan publikasi ilmiah RegTech Governance di ICOMCos 2026.",
};

export default function AchievementsPage() {
  return (
    <>
      <Achievements />
      <Footer />
    </>
  );
}
