import MainLayout from "@/components/layout/MainLayout";

const BuildWithAISRMCEM = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Build with AI Workshop at SRMCEM</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: April 19, 2025</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: SRMCEM, Lucknow, Uttar Pradesh – 226002</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Lucknow AI Labs, TFUG Lucknow</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          This <strong>Build with AI</strong> edition at <strong>SRMCEM, Lucknow</strong>, brought together aspiring developers and enthusiasts for a compact yet powerful dive into the practical applications of AI and Android development. With a focus on <strong>multimodal AI assistants</strong>, this session offered hands-on experience and career guidance for future-ready developers.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Agenda</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Time</th>
                <th className="border border-border p-3 text-left">Session Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">12:00 PM – 1:00 PM</td>
                <td className="border border-border p-3">📝 <strong>Registration</strong></td>
              </tr>
              <tr>
                <td className="border border-border p-3">01:00 PM – 1:30 PM</td>
                <td className="border border-border p-3">🔐 <em>Leveraging Context Aware Capabilities on GCP - Enhancing Security with AI</em><br/><strong>Speaker:</strong> Imran Roshan</td>
              </tr>
              <tr>
                <td className="border border-border p-3">01:30 PM – 2:30 PM</td>
                <td className="border border-border p-3">🛠️ <em>AI, Analyze, Apply; Building AI Tools Workshop</em><br/><strong>Speaker:</strong> Uzma Mansoori</td>
              </tr>
              <tr>
                <td className="border border-border p-3">02:30 PM – 3:30 PM</td>
                <td className="border border-border p-3">📱 <em>Revolutionizing App Development with Generative AI and Flutter Workshop</em><br/><strong>Speaker:</strong> Abhishek Sahu</td>
              </tr>
              <tr>
                <td className="border border-border p-3">03:30 PM – 4:00 PM</td>
                <td className="border border-border p-3">🍽️ <strong>Networking with Lunch</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Security-First AI Integration:</strong> Imran Roshan's session on leveraging GCP's context-aware capabilities demonstrated how AI can proactively enhance system security, offering real-world insights into secure cloud architecture.</li>
          <li><strong>Practical AI Tool Building:</strong> Uzma Mansoori led a hands-on workshop titled "AI, Analyze, Apply" where participants built functional AI tools, emphasizing practical implementation over just theory.</li>
          <li><strong>Generative AI Meets Mobile Innovation:</strong> Abhishek Sahu's workshop showcased how Generative AI and Flutter can revolutionize app development, sparking ideas for AI-driven mobile innovation.</li>
          <li><strong>Collaborative Networking Over Lunch:</strong> The event concluded with a relaxed networking lunch, fostering meaningful conversations between professionals, students, and AI enthusiasts.</li>
        </ul>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Participation Essentials</h2>
        <div className="note-block note-block-dark">
          <p className="font-medium text-foreground">Mandatory Items:</p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mt-2">
            <li>Fully charged <strong>laptop + charger</strong> for codelabs</li>
            <li><strong>Government-issued ID</strong> + <strong>College ID</strong> for entry verification</li>
          </ul>
        </div>
        <p className="text-muted-foreground">
          All participants engaged in hands-on labs and received access to Gemini developer credits and exclusive cloud learning resources.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-muted-foreground">
          This campus-driven <strong>Build with AI</strong> edition created a focused learning environment for emerging engineers at <strong>SRMCEM</strong>, blending AI expertise, career insights, and technical deep dives. A great initiative powered by <strong>Google Cloud</strong> and local developer groups to spark innovation right where it matters most — at the grassroots.
        </p>
      </div>
    </MainLayout>
  );
};

export default BuildWithAISRMCEM;
