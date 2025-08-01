import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommunitySupport from "@/components/CommunitySupport";
import ImpactStats from "@/components/ImpactStats";
import HowToHelp from "@/components/HowToHelp";
import Empowerment from "@/components/Empowerment";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CommunitySupport />
        <ImpactStats />
        <HowToHelp />
        <Empowerment />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
