import Navbar from "@/components/universal/Navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/universal/Footer";

export const metadata = {
  title: "Contact Us — First Option Millwork",
  description: "Get in touch with First Option Millwork for custom cabinetry and millwork projects.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
