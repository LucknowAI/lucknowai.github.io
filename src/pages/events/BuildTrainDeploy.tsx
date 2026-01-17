import MainLayout from "@/components/layout/MainLayout";

const BuildTrainDeploy = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Build, Train & Deploy Workshop</h1>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Summary:</h3>
          <p className="text-muted-foreground">
            The "Build, Train & Deploy" workshop, hosted by TFUG Lucknow and collaborated by LUCKNOW AI LABS, provided a deep dive into the world of AI and ML, ranging from basic neural networks to advanced generative AI models. This event offered a comprehensive educational experience, combining theoretical knowledge with practical coding exercises.
          </p>
        </div>

        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: February 27, 2024</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground"><strong>Speakers:</strong></p>
          <ul className="list-disc pl-6 text-foreground">
            <li><a href="https://www.linkedin.com/in/aadityaura" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ankit</a> - Senior AI Research Engineer at Saama, expert in NLP and AI/ML</li>
            <li><a href="https://www.linkedin.com/in/a-sahu16" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Abhishek Sahu</a> - Senior Software Engineer at BFC Capital P. Ltd, expertise in RAG and Flutter</li>
          </ul>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Venue: Shri Ramswaroop College Of Engineering and Management, Lucknow</p>
        </div>

        <a 
          href="https://lucknowai.github.io/assets/pdfs/lucknow_ai_meetup26nov2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:underline font-medium"
        >
          View Slides →
        </a>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Event Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Introduction and Overview</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Held at Shri Ramswaroop College Of Engineering and Management, Lucknow, this workshop attracted over 200 participants, including AI and ML enthusiasts, students, and professionals.</li>
            <li>The workshop featured an in-depth exploration at every stage of learning in AI/ML concepts, facilitated by hands-on sessions with Google Colab.</li>
            <li>Sessions covered ranged from the foundational principles of neural networks to practical implementations of advanced models like BERT and GPT.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Detailed Sessions Breakdown</h3>
          
          <h4 className="text-lg font-medium">Ankit's Comprehensive AI/ML Overview</h4>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Foundational AI Concepts:</strong> Ankit began with a strong foundation in neural networks, detailing their design and functionality.</li>
            <li><strong>Advanced AI Models and Techniques:</strong> The presentation covered embeddings, attention mechanisms, transformers, and the intricacies of models such as BERT and GPT.</li>
            <li><strong>Project Management with GitHub:</strong> Ankit's session offered valuable insights into leveraging GitHub for managing complex AI projects.</li>
          </ul>

          <h4 className="text-lg font-medium">Abhishek Sahu's RAG Model Workshop</h4>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Tackling Large Language Models Challenges:</strong> Abhishek addressed specific issues inherent in LLMs, such as data hallucination and the need for up-to-date information.</li>
            <li><strong>Practical Demonstrations:</strong> Participants were treated to hands-on demonstrations of RAG implementations.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Audience Engagement and Learning Outcomes</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Diverse Participant Group:</strong> The workshop was designed to cater to a wide range of participants, from beginners to seasoned professionals.</li>
            <li><strong>Skill Enhancement and Knowledge Acquisition:</strong> Attendees gained valuable skills in AI model development.</li>
            <li><strong>Community Building and Collaboration:</strong> The event fostered a sense of community among AI enthusiasts.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            The "Build, Train & Deploy" workshop by LUCKNOW AI LABS and TFUG Lucknow was a transformative event in AI and ML education. It not only provided participants with a thorough understanding of AI technologies but also equipped them with the practical skills necessary for their application in real-world scenarios.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BuildTrainDeploy;
