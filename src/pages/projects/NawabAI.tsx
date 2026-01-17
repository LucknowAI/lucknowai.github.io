import MainLayout from "@/components/layout/MainLayout";

const NawabAI = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Nawab AI</h1>
        
        <hr className="border-border mb-8" />

        <h2 className="text-2xl font-semibold text-foreground mb-4">Nawab AI – A Localized AI Assistant for Lucknow</h2>
        
        <div className="space-y-2 mb-8">
          <p className="text-muted-foreground"><strong className="text-foreground">Developed by:</strong> Lucknow AI Labs (LAI)</p>
          <p className="text-muted-foreground"><strong className="text-foreground">Project Type:</strong> Open-Source, Community-Driven AI Assistant</p>
          <p className="text-muted-foreground"><strong className="text-foreground">Focus Region:</strong> Lucknow and surrounding areas</p>
        </div>

        <hr className="border-border mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Nawab AI</strong> is an initiative by <strong className="text-foreground">Lucknow AI Labs (LAI)</strong> aimed at building a localized AI assistant tailored to the specific needs and culture of the <strong className="text-foreground">Lucknow region</strong>. Designed to be accessible, inclusive, and context-aware, the project aspires to bridge the digital divide by empowering local users with intelligent assistance in their own dialect and style.
          </p>
        </section>

        <hr className="border-border mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features of Nawab AI</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Local Language Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nawab AI is designed to understand and communicate in <strong className="text-foreground">local dialects</strong>, enhancing accessibility and making technology more relatable for users in the region.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community-Driven Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                The project invites <strong className="text-foreground">local developers, students, and AI enthusiasts</strong> to contribute to the assistant's capabilities, ensuring that it evolves with the needs of its users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Open-Source Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built using an <strong className="text-foreground">open-source model</strong>, Nawab AI encourages <strong className="text-foreground">transparency, collaboration, and innovation</strong>. Community feedback drives continuous improvement and personalization.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">About Lucknow AI Labs (LAI)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Lucknow AI Labs</strong> is a grassroots, open-source community dedicated to <strong className="text-foreground">advancing AI literacy and development</strong> in and around Lucknow. Their mission is to create a thriving local ecosystem through:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong className="text-foreground">Workshops and Skill-Building Sessions</strong></li>
            <li><strong className="text-foreground">Tech Meetups and Collaboration Events</strong></li>
            <li><strong className="text-foreground">Open Innovation Projects like Nawab AI</strong></li>
          </ul>
        </section>

        <hr className="border-border mb-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Get Involved</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">If you're interested in:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Building localized AI models</li>
            <li>Contributing to open-source AI projects</li>
            <li>Supporting tech inclusion in regional communities</li>
          </ul>
        </section>

        <hr className="border-border mt-12" />
      </div>
    </MainLayout>
  );
};

export default NawabAI;
