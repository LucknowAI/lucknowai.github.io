import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CollaborationsSection from "@/components/home/CollaborationsSection";
import ContributingSection from "@/components/home/ContributingSection";
import CodeOfConductSection from "@/components/home/CodeOfConductSection";
import FooterSection from "@/components/home/FooterSection";

const Index = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl">
        <HeroSection />
        <FeaturesSection />
        <CollaborationsSection />
        <ContributingSection />
        <CodeOfConductSection />
        <FooterSection />
      </div>
    </MainLayout>
  );
};

export default Index;
