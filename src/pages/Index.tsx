import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import ComingSoon from "@/components/ComingSoon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <WhyChooseUs />
        <Pricing />
        <Services />
        <Booking />
        <Contact />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
