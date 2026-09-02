import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import WhyBrands from "@/components/sections/WhyBrands/WhyBrands";
import Gallery from "@/components/sections/Gallery/Gallery";
import FeaturedReels from "@/components/sections/Reels/FeaturedReels";
import Campaigns from "@/components/sections/Campaigns/Campaigns";
import Brands from "@/components/sections/Brands/Brands";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Services from "@/components/sections/Services/Services";
import SocialProof from "@/components/sections/SocialProof/SocialProof";
import InstagramCTA from "@/components/sections/InstagramCTA/InstagramCTA";
import CollabCTA from "@/components/sections/CollabCTA/CollabCTA";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBrands />
        <Gallery />
        <FeaturedReels />
        <Campaigns />
        <Brands />
        <Testimonials />
        <Services />
        <SocialProof />
        <InstagramCTA />
        <CollabCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
