import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero/Hero";
import InstagramReels from "@/components/sections/Reels/InstagramReels";
import About from "@/components/sections/About/About";
import OnScreen from "@/components/sections/OnScreen/OnScreen";
import Collaborations from "@/components/sections/Collaborations/Collaborations";
import Gallery from "@/components/sections/Gallery/Gallery";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InstagramReels />
        <About />
        <OnScreen />
        <Collaborations />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
