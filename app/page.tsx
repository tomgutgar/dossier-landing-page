import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Infrastructure } from "@/components/infrastructure";
import { Packages } from "@/components/packages";
import { Services } from "@/components/services";
import { Configurator } from "@/components/configurator";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUs } from "@/components/why-us";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Infrastructure />
        <Packages />
        <Services />
        <Configurator />
        <HowItWorks />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
