import MainLayout from "@/components/layout/MainLayout";

const AIDayLucknow = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">AI Day Lucknow 2024</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: October 19, 2024 | Time: 10:00 AM - 4:00 PM IST</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: Lucknow Public College of Professional Studies (LPCPS), Gomti Nagar, Lucknow</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Lucknow AI Labs, TFUG Lucknow</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          AI Day Lucknow 2024 was a dynamic blend of innovation, inspiration, and immersive learning. Hosted at LPCPS, the event brought together developers, data scientists, students, and tech enthusiasts to explore how Artificial Intelligence is revolutionizing industries and communities. Sessions featured cutting-edge tools, real-world use cases, and deep dives into LLMs, AI production pipelines, and robotics.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Keynote Address</h3>
          <div className="note-block note-block-dark">
            <p className="font-medium text-foreground">Artificial Intelligence: Transforming Our Lives</p>
            <p className="text-muted-foreground italic">by Dr. Anuj Kumar Sharma</p>
            <p className="text-muted-foreground text-sm">(Dean Academics, Centre for Advanced Studies; Associate Dean – Innovation & Incubation, AKTU Lucknow)</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Talks & Workshops</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Neo4j Database in Natural Language using Gemini Model</strong> — Bhavesh B.</li>
            <li><strong>The Role of AI in Robotics Development and Control Methods</strong> — Avinash Bhasker</li>
            <li><strong>A Strategic Guide to Building and Evaluating LLM Agents with Gemma and Gemini</strong> — Ankit Pal</li>
            <li><strong>AI and Data Science – The Perfect Pairing</strong> — Prashant Shukla</li>
            <li><strong>AI in Integration and Production Pipelines</strong> — Neeraj Sir</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Poster Presentations</h3>
          <p className="text-muted-foreground">
            Enthusiasts and early-career researchers showcased their work in ML, NLP, computer vision, and GenAI applications, sparking vibrant discussion and collaboration.
          </p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Speakers</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Dr. Anuj Kumar Sharma</strong> – AKTU Lucknow</li>
          <li><strong>Bhavesh B.</strong> – AI Developer & Data Architect</li>
          <li><strong>Avinash Bhasker</strong> – Robotics & Control Systems Researcher</li>
          <li><strong>Ankit Pal</strong> – AI Strategist</li>
          <li><strong>Prashant Shukla</strong> – Data Science Expert</li>
          <li><strong>Neeraj Sir</strong> – AI Systems Integrator</li>
        </ul>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Networking & Swags</h2>
        <p className="text-muted-foreground">
          The event also featured dedicated networking breaks where attendees connected with mentors, professionals, and peers. All participants received exclusive AI Day swags including pen, stickers and notepad and participation kits sponsored by the community partners.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-muted-foreground">
          AI Day Lucknow 2024 was more than just an event — it was a celebration of community-driven learning and innovation. It opened doors to new ideas, created meaningful connections, and empowered attendees to contribute actively to the future of AI in India.
        </p>
      </div>
    </MainLayout>
  );
};

export default AIDayLucknow;
