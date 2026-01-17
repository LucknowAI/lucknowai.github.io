import MainLayout from "@/components/layout/MainLayout";

const HackToCrack = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Hack To Crack 1.0: An AI/ML Hackathon</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: 23-24 May 2024 (24 hour Hackathon)</p>
        </div>

        <a 
          href="https://www.commudle.com/communities/tfug-lucknow/hackathons/hack-to-crack-1-0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:underline font-medium"
        >
          View Event Details →
        </a>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Event Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Introduction and Overview</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Hack To Crack 1.0 was an exhilarating 24 hours AI/ML hackathon focused on tackling real-world challenges.</li>
            <li>This event has been organized by TFUG Lucknow in collaboration with GDG Lucknow and Lucknow AI Labs.</li>
            <li>The event was open to all skill levels, from seasoned data scientists to beginners in AI/ML.</li>
            <li>Participants had the opportunity to work in teams, exploring various fields such as computer vision, natural language processing, and reinforcement learning.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Participation and Engagement</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>33 participants joined the event, forming 9 teams.</li>
            <li>The hackathon encouraged collaboration, innovation, and showcasing of talent in AI/ML technologies.</li>
            <li>Participants worked on developing intelligent algorithms and implementing predictive models.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Projects and Domains</h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Automated AI/ML System for Detecting and Mitigating Online Fraud (Online Fraud Detection)</li>
            <li>AI-Multilingual-Chatbot (Natural Language Processing)</li>
            <li>Batch Audio Transcription Tool (Speech Recognition and Translation)</li>
            <li>Bridging the Language Gap: AI-Powered Local Language Transcription and Translation (Natural Language Processing)</li>
            <li>Spotify clone (Music Streaming)</li>
            <li>Whisper: AI-Powered Local Exploration with RAG-Gemini WhatsApp Bot (Conversational AI)</li>
            <li>ChatWithYourPDF (Document Analysis and Conversational AI)</li>
            <li>DocGPT (Document Processing and AI)</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Winners</h3>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li><strong>First Place:</strong> Automated AI/ML System for Detecting and Mitigating Online Fraud - Team Name: Veg Kabab, Team: Utkarsh Tiwari</li>
            <li><strong>Second Place:</strong> Bridging the Language Gap: AI-Powered Local Language Transcription and Translation - Team Name: Quaraforce, Team: Aditya Singh, Gaurangi Prakash, Vishal Sarup mathur, Suyash pandey</li>
            <li><strong>Third Place:</strong> Batch Audio Transcription Tool (Speech Recognition and Translation) - Team Name: Pheonix, Team: Anshika Shahi, Divyansh Singh</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Impact and Innovation</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>The event provided a platform for pushing the boundaries of AI innovation.</li>
            <li>Participants worked on solutions to empower and assist underserved communities.</li>
            <li>The hackathon fostered the development of AI technologies for social good.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            Hack To Crack 1.0 successfully brought together AI/ML enthusiasts to collaborate, innovate, and create impactful solutions. The diverse range of projects demonstrated the potential of AI/ML technologies in solving real-world problems and contributing to a more inclusive and equitable society.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default HackToCrack;
