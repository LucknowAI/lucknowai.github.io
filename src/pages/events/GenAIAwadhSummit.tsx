import MainLayout from "@/components/layout/MainLayout";

const GenAIAwadhSummit = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Gen AI Awadh Summit 2024</h1>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Summary:</h3>
          <p className="text-muted-foreground">
            The Gen AI Awadh Summit, held on May 25, 2024, brought together tech enthusiasts, industry experts, and innovators at the Centre for Advanced Studies, Dr. APJ Abdul Kalam Technical University in Lucknow, India. Organized by TFUG Lucknow and supported by Hunto AI, the summit delved into the latest advancements in artificial intelligence with a special focus on generative AI.
          </p>
        </div>

        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date and Time: May 25, 2024, 10:00 AM</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: 1st Floor, SSB Hall, Dr. APJ Abdul Kalam Technical University, Lucknow, India-226031</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: TFUG Lucknow | Sponsors: Hunto AI | Collaborations: Google Developer Groups Lucknow</p>
        </div>

        <a 
          href="https://maps.app.goo.gl/SjHMW3oYjAX2Dgeq6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:underline font-medium"
        >
          View Location on Map →
        </a>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Event Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Registration and Welcome</h3>
          <p className="text-muted-foreground">
            Attendees gathered at 10:00 AM for registration, followed by a welcome address and introduction by the organizers.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Keynote Sessions and Technical Talks</h3>
          
          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Generative AI Fundamentals</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Aaditya (Senior Research Engineer, Organizer TFUG Lucknow)</p>
            <p className="text-muted-foreground">Aaditya provided a comprehensive introduction to generative AI, highlighting its applications and potential to revolutionize industries.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Large Language Models in Cybersecurity: Google's Sec-PaLM and Cloud Security AI Workbench</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Madhurendra Sachan</p>
            <p className="text-muted-foreground">Madhurendra explored the integration of large language models like Sec-PaLM in enhancing cybersecurity.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Crafting Visions with Gemini: How Text Becomes Visual Masterpieces</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Prashant Shukla (Research Associate at IIT Delhi, Co-organizer TFUG Lucknow)</p>
            <p className="text-muted-foreground">Prashant demonstrated how Gemini AI transforms text into visual creations.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Afternoon Workshops and Panel Discussions</h3>
          
          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Fine-Tuning Google's Large Language Model Gemma with Keras NLP</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Abhishek Sahu (Organizer GDG Lucknow, Co-organizer TFUG Lucknow)</p>
            <p className="text-muted-foreground">Abhishek discussed fine-tuning Google's language model Gemma, showcasing practical applications in natural language processing.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Panel Discussion: The Evolution of AI: Past, Present, and Future</h4>
            <p className="text-muted-foreground">A panel of experts engaged in a lively discussion on AI's growth and future possibilities.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Hackathon and Community Showcase</h3>
          <p className="text-muted-foreground">
            The event concluded with a hackathon winner's felicitation and community project showcase, celebrating innovative AI-driven solutions developed during the summit.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            The Gen AI Awadh Summit left attendees inspired and eager to further explore the potential of AI. The event was a testament to the collaborative spirit of the AI community in Lucknow and the broader impact AI can have on society.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default GenAIAwadhSummit;
