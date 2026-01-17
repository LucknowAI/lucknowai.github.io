import MainLayout from "@/components/layout/MainLayout";

const IWDLucknow = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">International Women's Day Lucknow 2025</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: March 8, 2025 | Time: 10:00 AM - 4:00 PM IST</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: Integral University, Lucknow</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Lucknow AI Labs, TFUG Lucknow</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          International Women's Day (IWD) Lucknow 2025 was a powerful gathering of women in tech, leaders, students, and allies — all celebrating inclusivity, empowerment, and innovation. Organized by GDG Lucknow and supported by LAI and other partners, the event highlighted women's roles in shaping the tech ecosystem, from cybersecurity to generative AI.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Keynote Addresses</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Cyber Warrior: How Women Are Shaping the Future of Cybersecurity</strong> — Arti Verma</li>
            <li><strong>Leadership Reimagined: Women Leading the Way</strong> — Vandana Sharma</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Technical Sessions</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Unlocking the Power of Effective Communication</strong> — Sarita Nirjhra</li>
            <li><strong>Gen AI, Agentic AI & LLMs: The Future of Intelligent Automation (Hands-on)</strong> — Uzma Mansoori</li>
            <li><strong>Build for Future: Build with AI</strong> — Abhishek Sahu</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Engagement Activities</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Open community talk encouraging attendees to share stories and challenges</li>
            <li>Fun interactive sessions and group photo moments to build stronger connections</li>
          </ul>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Speakers</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Arti Verma</strong> – Cybersecurity Specialist</li>
          <li><strong>Vandana Sharma</strong> – Tech Leader & Motivational Speaker</li>
          <li><strong>Sarita Nirjhra</strong> – Communication Coach & Storyteller</li>
          <li><strong>Uzma Mansoori</strong> – AI Developer & ML Trainer</li>
          <li><strong>Abhishek Sahu</strong> – AI Advocate & Community Evangelist</li>
        </ul>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Networking & Swags</h2>
        <p className="text-muted-foreground">
          Attendees enjoyed energetic networking breaks, interactive Q&As with the speakers, and exclusive IWD swag kits that included themed eco-friendly merch, and stickers. The event also sparked collaboration ideas and inspired local initiatives.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-muted-foreground">
          IWD Lucknow 2025 was not just a tech event — it was a celebration of voice, value, and vision. It empowered participants to take pride in their presence, amplify their expertise, and become change-makers in their domains.
        </p>
      </div>
    </MainLayout>
  );
};

export default IWDLucknow;
