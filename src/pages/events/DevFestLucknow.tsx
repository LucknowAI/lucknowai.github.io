import MainLayout from "@/components/layout/MainLayout";

const DevFestLucknow = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">DevFest Lucknow 2024</h1>
        
        <div className="note-block note-block-purple space-y-2">
          <p className="text-sm font-semibold text-yellow-400 uppercase">Note</p>
          <p><strong>Date:</strong> November 24, 2024</p>
          <p><strong>Venue:</strong> The Regnant, Aliganj Main Road, Lucknow</p>
          <p><strong>Time:</strong> 10:00 AM - 5:00 PM IST</p>
        </div>

        <div className="note-block note-block-dark space-y-2">
          <p><strong>Organizers:</strong> Google Developer Groups</p>
          <p><strong>Collaborations:</strong> Lucknow AI Labs, TFUG Lucknow, Socrates Global</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          DevFest Lucknow 2024 was a flagship developer event that brought together tech enthusiasts, developers, engineers, and creators under one roof. Hosted at The Regnant, this high-energy gathering focused on the future of development, cloud, AI, and modern application architecture.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Keynote Addresses</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Embracing the Future of Technology</strong> — Abhishek Sahu</li>
            <li><strong>Powering the Developer Ecosystem in Bharat</strong> — Mrityunjay</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Technical Sessions</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Harnessing Google Cloud for Real-Time Problem Solving through Observability</strong> — Saurabh Mishra</li>
            <li><strong>The Future of AI with Gemini: Addressing Security Challenges and Opportunities</strong> — Geeta Kakrani</li>
            <li><strong>WASM-Based Containers: The Future of Lightweight, Portable, and Secure Applications</strong> — Vishal Kumar</li>
            <li><strong>Vision-Language Models and PaliGemma</strong> — Nitin Tiwari</li>
            <li><strong>Future of Application Development and Progressive Web Apps</strong> — Snigdha Kashyap</li>
            <li><strong>Responsible AI: Managing Bias, Accuracy, and Explainability</strong> — Anurag Sinha</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Hands-On Activities</h3>
          <p className="text-muted-foreground">
            Attendees took part in live coding demos, GCP walkthroughs, and deep discussions on AI ethics, observability, and cross-platform development using modern tools.
          </p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Speakers</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Abhishek Sahu</strong> – Community Leader & Tech Evangelist</li>
          <li><strong>Mrityunjay Dwivedi</strong> – Ecosystem Builder</li>
          <li><strong>Saurabh Mishra</strong> – Google Cloud Expert</li>
          <li><strong>Geeta Kakrani</strong> – AI Researcher</li>
          <li><strong>Vishal Kumar</strong> – Cloud Native Engineer</li>
          <li><strong>Nitin Tiwari</strong> – ML & Vision Systems Engineer</li>
          <li><strong>Snigdha Kashyap</strong> – Frontend & PWA Specialist</li>
          <li><strong>Anurag Sinha</strong> – Responsible AI Advocate</li>
        </ul>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Networking & Swags</h2>
        <p className="text-muted-foreground">
          DevFest featured vibrant networking zones where developers shared ideas, discussed tech stacks, and explored opportunities. Swags like DevFest themed laptop stickers, pen and notepad added a fun and memorable vibe to the day.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-muted-foreground">
          DevFest Lucknow 2024 was an inspiring convergence of minds pushing the boundaries of innovation. From security in AI to the future of web and cloud-native development, the event empowered attendees to build, collaborate, and shape what's next.
        </p>
      </div>
    </MainLayout>
  );
};

export default DevFestLucknow;