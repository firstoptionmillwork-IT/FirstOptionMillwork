import Navbar from "@/components/universal/Navbar";
import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GalleryMarquee from "@/components/Gallery/GalleryMarquee";
import Footer from "@/components/universal/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryMarquee />
      <Footer />
    </>
  );
}
