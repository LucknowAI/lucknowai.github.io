import MainLayout from "@/components/layout/MainLayout";

const Mentorship = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-2">LAI Labs Mentorship Program</h1>
        
        <p className="text-foreground/90 text-lg mb-6">
          Fostering growth, innovation, and knowledge sharing between experienced AI professionals and aspiring learners.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Program Details</h2>
        <p className="text-foreground/90 mb-4">
          The LAI Labs Mentorship Program connects experienced AI professionals with aspiring learners for collaborative project development, research, and skill enhancement.
        </p>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Enrollment Process</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Visit the LAI Labs website and navigate to the Mentorship Program section.</li>
          <li>Fill out the application form specifying if you're applying as a mentor or mentee.</li>
          <li>Mentees: Describe your background, goals, and areas of interest in AI.</li>
          <li>Mentors: Detail your expertise, experience, and mentorship philosophy.</li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Benefits</h3>
        
        <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">For Mentees:</h4>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Personalized guidance from industry experts</li>
          <li>Hands-on experience with real-world AI projects</li>
          <li>Networking within the AI community</li>
          <li>Skill development in cutting-edge AI technologies</li>
        </ul>
        
        <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">For Mentors:</h4>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Opportunity to give back to the community</li>
          <li>Recognition as a thought leader in AI</li>
          <li>Enhancement of leadership and communication skills</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Mentor Guidelines</h2>
        <p className="text-foreground/90 mb-4">
          Ensure that all mentor-mentee interactions adhere to the LAI Labs standards.
        </p>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Communication Channels</h3>
        <p className="text-foreground/90 mb-4">
          Use official platforms like Discord and Google Meet for all interactions.
        </p>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Session Structure</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Weekly one-hour sessions (minimum)</li>
          <li>Additional asynchronous communication through Discord</li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Responsibilities</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Provide expert guidance in AI concepts and technologies</li>
          <li>Assist in project planning and execution</li>
          <li>Offer career advice and industry insights</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Mentee Guidelines</h2>
        <p className="text-foreground/90 mb-4">
          Mentees are expected to be committed and proactive during the mentorship period.
        </p>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Program Commitment</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Attend all scheduled sessions with your mentor</li>
          <li>Dedicate at least 5 hours per week to program-related work</li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Project Requirements</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>Develop a project proposal within the first two weeks</li>
          <li>Provide weekly progress updates</li>
          <li>Present your final project at the end of the program</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Register Now</h2>
        
        <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Mentee Registration</h4>
        <p className="mb-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfM8W6BIKtstyAK9BfcUdggJ_YiX8sNZke1kuWZ4_lZAS2vdA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Register as Mentee
          </a>
        </p>
        
        <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">Mentor Registration</h4>
        <p className="mb-4">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScUTIVk28lJQkmsT-fqFmkp06q1oJm6efdoMPZ79FHDCRBbfQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Register as Mentor
          </a>
        </p>
        
        <p className="text-foreground/90 mt-6">
          Have questions? Feel free to reach out to the{" "}
          <a 
            href="/contact"
            className="text-primary hover:underline"
          >
            LAI Labs Mentorship Program Coordinator
          </a>{" "}
          for more information. We're here to help you every step of the way!
        </p>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default Mentorship;
