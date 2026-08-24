import FadeIn from "@/components/animations/fade-in";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PersonalData from "@/components/PersonalData";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col items-center gap-52 px-4 py-16">
        <PersonalData />
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Proyects />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
