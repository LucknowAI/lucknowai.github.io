import MainLayout from "@/components/layout/MainLayout";

const BuildWithAI2024 = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Build with AI</h1>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Summary:</h3>
          <p className="text-muted-foreground">
            The "Build with AI" event series, hosted by Google Developer Groups, was an immersive two-day experience designed to equip developers with the latest AI tools and integration techniques. Held on June 29 and 30, 2024, the event featured a range of sessions from industry experts, hands-on workshops, and interactive discussions.
          </p>
        </div>

        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: June 29-30, 2024</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: <a href="https://www.commudle.com/communities/gdg-lucknow/events/build-with-ai-a95fe069-b028-4650-b1ac-9f8a6767b3d2" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Online Event</a></p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Various AI and ML Experts</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Event Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Day 1 - June 29</h3>
          
          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">LLM INFERENCE using Mediapipe with Gemma</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Kartikey Rawat (Open Source Manager at CodeLabs | Google Developer Expert in ML)</p>
            <p className="text-muted-foreground">Kartikey delved into using Mediapipe for LLM inference, showcasing its capabilities and applications in AI projects.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">AI-Powered Malware: The Evolving Threat Landscape</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Shrutirupa Banerjee (Senior Security Researcher at Quick Heal Technologies)</p>
            <p className="text-muted-foreground">Shrutirupa discussed the rise of AI-powered malware and the associated security challenges.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Localised Intelligence in AI for a Richer AI-UX</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Harsh Joshi (Founder, DAO Studio)</p>
            <p className="text-muted-foreground">Harsh explored how localized intelligence can improve AI user experiences.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Day 2 - June 30</h3>
          
          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">LLM Powered Application using Advanced RAG Methodology SELF-RAG</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Jyotishko Biswas (Head of AI for HP Global Treasury)</p>
            <p className="text-muted-foreground">Jyotishko presented on automating contract compliance in Fortune 500 firms using SELF-RAG methodology.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Generative AI Fundamentals</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Ankit Pal (Senior Research Engineer at Saama | Organizer TFUG Lucknow)</p>
            <p className="text-muted-foreground">Ankit covered the fundamentals of Generative AI, including its principles and applications.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Workshop: Intro to RAG with Gemini and Custom Data</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Abhishek Sahu (Senior Software Engineer at BFC | Co-Organizer GDG, TFUG Lucknow)</p>
            <p className="text-muted-foreground">Abhishek conducted a hands-on workshop on RAG with Gemini.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Networking & Swag Distribution</h3>
          <p className="text-muted-foreground">
            The event featured a networking session, allowing participants to connect with speakers and peers. Google swag was distributed, adding a fun conclusion to the event.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            The "Build with AI" series successfully provided valuable knowledge and skills on various aspects of AI. Attendees gained practical experience with AI tools, learned from industry experts, and connected with the developer community.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BuildWithAI2024;
