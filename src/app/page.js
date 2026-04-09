import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section3 from "@/components/Section3";
import Testimonials from "@/components/testimonials";
import AboutUsSection from "@/components/ui/about-us-section";
import Services from "@/components/ui/services";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUsSection />
      <Section3/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  );
}