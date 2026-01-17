import MainLayout from "@/components/layout/MainLayout";

const LAIFaqs = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: What is Lucknow AI Labs?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lucknow AI Labs is a nonprofit organization dedicated to growing awareness about artificial intelligence (AI) and its applications. We focus on educating individuals, businesses, and communities on AI technologies while providing hands-on learning opportunities and resources.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: Who can benefit from Lucknow AI Labs' programs?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our programs are open to students, developers, entrepreneurs, and professionals from all industries who are interested in learning more about AI. We welcome anyone who wants to explore how AI can improve their skills or help their organization.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How is Lucknow AI Labs funded?</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a nonprofit, we rely on donations, grants, and sponsorships to fund our activities. We also collaborate with educational institutions and other organizations to support our mission of spreading AI knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How does Lucknow AI Labs ensure inclusivity in AI education?</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to making AI education accessible to everyone, regardless of their background. Our workshops and events are designed to be inclusive, with resources for beginners and opportunities for underserved communities to learn about AI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How can I support Lucknow AI Labs?</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can support us by volunteering, donating, or participating in our events and workshops. Additionally, sharing our mission and helping spread AI awareness in your community contributes to our cause.
            </p>
          </div>
        </div>

        <hr className="border-border mt-12" />
      </div>
    </MainLayout>
  );
};

export default LAIFaqs;
