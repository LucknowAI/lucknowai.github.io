import MainLayout from "@/components/layout/MainLayout";

const GoogleIOExtended = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Google I/O Extended Lucknow 2023</h1>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Summary:</h3>
          <p className="text-muted-foreground">
            The Google I/O Extended event in Lucknow took place at Integral University on Kursi Road, offering a platform for developers, designers, and tech enthusiasts to gather, learn, and exchange insights on the latest trends in technology.
          </p>
        </div>

        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date and Time: September 10, 2023, 10:00 AM</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: Integral University, Kursi Road, Dashauli, Uttar Pradesh 226026</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: GDG Lucknow | Collaborations: Google Developer Groups India</p>
        </div>

        <a 
          href="https://www.google.com/maps/place/Integral+University"
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
            The event kicked off at 10:00 AM with registration, where attendees were required to present their Entry Pass and a valid photo ID for verification.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Key Sessions and Insights</h3>
          
          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Learning Containers Before You Jump on the Clouds</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Mritunjay Sharma (Software Engineer at Chainguard)</p>
            <p className="text-muted-foreground">Mritunjay provided a deep dive into the role of containers in modern cloud-native applications.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Beyond the Pixel: The Human Side of Design</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Vanshita Singh (Co-Organizer at GDG Noida, WTM Ambassador, UI/UX Designer)</p>
            <p className="text-muted-foreground">Vanshita explored the emotional and psychological elements of design, emphasizing user-centered design principles.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Quiz Session</h4>
            <p className="text-muted-foreground">A fun and interactive quiz session was conducted to test participants' knowledge on tech topics covered during the event.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Integrating Gemini AI with Jetpack Compose</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Akash Verma</p>
            <p className="text-muted-foreground">Akash introduced the audience to Gemini AI and demonstrated how to integrate it with Jetpack Compose.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Build a Seamless and Intuitive Product with Jakob Nielsen's Heuristic Principles</h4>
            <p className="text-muted-foreground"><strong>Speaker:</strong> Aryendra Prakash Singh (Co-Organizer at GDG Noida, Design Lead at Publicis Sapient)</p>
            <p className="text-muted-foreground">Aryendra presented Jakob Nielsen's 10 Usability Heuristics, providing practical advice on applying these principles.</p>
          </div>

          <div className="note-block note-block-dark">
            <h4 className="text-lg font-medium text-foreground">Introduction to Project IDX and Firebase Genkit | Build an Agent-Powered App with Generative AI</h4>
            <p className="text-muted-foreground">Attendees were introduced to Google's latest tools, Project IDX and Firebase Genkit.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Networking & Swag Distribution</h3>
          <p className="text-muted-foreground">
            The event concluded with a networking session, where participants had the opportunity to engage with speakers and fellow developers. Google swag was distributed.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            Google I/O Extended Lucknow 2023 was a highly informative and engaging event. Attendees gained valuable insights into containers, AI integration, product design, and usability.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default GoogleIOExtended;
