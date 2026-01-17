import MainLayout from "@/components/layout/MainLayout";

const BuildWithAIBBD = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Build with AI Workshop at BBD</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: April 7, 2025</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: Seminar Hall - 507, E-Block, BBD City, Faizabad Road, Lucknow, Uttar Pradesh – 226028</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Lucknow AI Labs, TFUG Lucknow</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          This <strong>Build with AI</strong> edition at <strong>BBDITM, Lucknow</strong>, brought together aspiring developers and enthusiasts for a compact yet powerful dive into the practical applications of AI and Android development. With a focus on <strong>multimodal AI assistants</strong>, this session offered hands-on experience and career guidance for future-ready developers.
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
                <td className="border border-border p-3">09:30 – 10:00</td>
                <td className="border border-border p-3"><em>Navigate the AI Revolution</em> – How Software Engineers Can Thrive in a Changing Career Landscape</td>
              </tr>
              <tr>
                <td className="border border-border p-3">10:00 – 12:00</td>
                <td className="border border-border p-3"><em>Hands-on Workshop:</em> Build and Deploy a Multimodal Assistant on Cloud with Gemini (Python)</td>
              </tr>
              <tr>
                <td className="border border-border p-3">12:00 – 12:30</td>
                <td className="border border-border p-3"><em>Intro to Android App Development</em> – Quick fundamentals and industry relevance</td>
              </tr>
              <tr>
                <td className="border border-border p-3">12:30 – 13:00</td>
                <td className="border border-border p-3"><em>Lunch & Networking</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Hands-On Learning:</strong> Attendees built a cloud-based multimodal assistant using <strong>Gemini APIs</strong>, gaining real-world skills in prompt handling, backend AI integration, and deployment.</li>
          <li><strong>Android 101:</strong> Fast-paced crash course on how to start building Android apps, tailored for beginners and campus developers.</li>
          <li><strong>Career Navigation Session:</strong> Provided insight into evolving AI job roles and upskilling roadmaps for students and professionals.</li>
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
          This campus-driven <strong>Build with AI</strong> edition created a focused learning environment for emerging engineers at <strong>BBDITM</strong>, blending AI expertise, career insights, and technical deep dives. A great initiative powered by <strong>Google Cloud</strong> and local developer groups to spark innovation right where it matters most — at the grassroots.
        </p>
      </div>
    </MainLayout>
  );
};

export default BuildWithAIBBD;
