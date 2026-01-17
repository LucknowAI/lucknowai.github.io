import MainLayout from "@/components/layout/MainLayout";

const Hack4Bihar = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Hack4Bihar: Lucknow Hacking Tour 2025</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: April 05, 2025 | Time: 10:00 AM - 5:00 PM</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: SRGI (SR Group of Institutions, Lucknow)</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Starkseek | Collaborations: Lucknow AI Labs, Cyber Intelligence Community (CIC) Lucknow, UMAGA Edutech Pvt. Ltd.</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          <strong>Hack4Bihar</strong> is a transformative initiative by <strong>StarkSeek</strong>, aiming to foster a culture of innovation and entrepreneurship in Bihar and its neighboring regions. The <strong>Lucknow edition</strong> is part of a series of <strong>pre-hackathon events</strong> leading up to the main <strong>Hack4Bihar 2025</strong> event scheduled for <strong>June 13–14, 2025</strong>.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Themes & Tracks</h2>
        <p className="text-muted-foreground">Participants engaged with a variety of impactful themes:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Smart Education:</strong> Innovative digital solutions to transform Bihar's education landscape</li>
          <li><strong>Healthcare Innovation:</strong> Accessible healthcare solutions for diverse populations</li>
          <li><strong>Agricultural Tech:</strong> Smart solutions to revolutionize farming practices</li>
          <li><strong>Sustainability Solutions:</strong> Eco-friendly innovations for a sustainable future</li>
          <li><strong>Artificial Intelligence:</strong> Intelligent, adaptive, and innovative AI solutions</li>
          <li><strong>Cybersecurity:</strong> Advanced solutions to protect digital landscapes</li>
          <li><strong>Game Development:</strong> Immersive and dynamic gaming experiences</li>
        </ul>

        <a 
          href="https://hack4bihar.live/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:underline font-medium"
        >
          Explore more: hack4bihar.live →
        </a>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Highlights</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Key Sessions</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Sudhansu Kumar</strong> – Shared the vision of Hack4Bihar, the StarkSeek initiative, and career growth in tech</li>
            <li><strong>Krishna Rana</strong> – Insights on app development best practices</li>
            <li><strong>Ekta Agrawal</strong> – "Multiverse of Innovation: Pokémon Edition", blending creativity with technology</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Hackathon Preparation</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Guidance on <strong>virtual BUIDL submissions</strong> and <strong>pitching strategies</strong></li>
            <li><strong>Top 10 shortlisted teams</strong> were invited to pitch their solutions at the event</li>
          </ul>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Networking & Collaboration</h2>
        <p className="text-muted-foreground">
          Attendees connected with professionals, mentors, and like-minded peers, exchanging ideas and laying the foundation for future collaborations.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Swags & Goodies</h2>
        <p className="text-muted-foreground">
          Every participant received exclusive event merchandise and collectibles, adding to the vibrant and high-energy atmosphere of the tour.
        </p>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="text-muted-foreground">
          The <strong>Hack4Bihar: Lucknow Hacking Tour</strong> was more than just a meetup — it was a <strong>catalyst for innovation and collaboration</strong>. Participants left inspired, equipped with knowledge, and ready to tackle real-world challenges in the upcoming <strong>Hack4Bihar 2025</strong> main event.
        </p>
        <div className="note-block note-block-olive">
          <p className="text-foreground italic">Innovation begins with community. The journey continues on June 13–14, 2025.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Hack4Bihar;
