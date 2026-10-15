import Hero from "@/components/Hero";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="home" className="snap-sec relative mx-auto w-full max-w-[1800px] px-3 pt-3 md:px-5 md:pt-5">
        <div className="hero-card relative flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface shadow-2xl shadow-black/40 md:min-h-[min(calc(100svh-2.5rem),1100px)]">
          <Hero />
        </div>
      </div>
      <main>
        <About />
        <Competencies />
        <Portfolio />
        <Experience />
        <Education />
        <AchievementsSection />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}
