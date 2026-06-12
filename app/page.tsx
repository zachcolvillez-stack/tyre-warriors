import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import SpecialDeal from "@/components/SpecialDeal";
import WhyChoose from "@/components/WhyChoose";
import Fleet from "@/components/Fleet";
import CoverageMap from "@/components/CoverageMap";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBar />
      <Services />
      <WhyChoose />
      <Fleet />
      <CoverageMap />
      <Testimonials />
      <EmergencyCTA />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  );
}
