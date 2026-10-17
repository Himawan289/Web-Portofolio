import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Organizations from "@/components/Organizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Credentials />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
