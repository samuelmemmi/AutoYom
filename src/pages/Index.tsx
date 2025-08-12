import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Pricing />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
