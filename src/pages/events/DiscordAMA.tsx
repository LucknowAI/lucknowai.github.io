import MainLayout from "@/components/layout/MainLayout";

const DiscordAMA = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Discord AMA Session Summary - LAI & DAO Labs</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Platform: Discord | Audience: Students and working professionals</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground"><strong>Speakers:</strong></p>
          <ul className="list-disc pl-6 text-foreground">
            <li><strong>Aaditya</strong>, Founder of LAI</li>
            <li><strong>Harsh Joshi</strong>, Founder of DAO Labs</li>
          </ul>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold">Key Discussion Points</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How Students Can Grab Internship Opportunities</h3>
          <p className="text-muted-foreground">
            Aaditya and Harsh shared insights into finding and securing internships in today's competitive landscape. They emphasized the importance of networking, leveraging platforms like LinkedIn, attending industry meetups, and participating in relevant online communities. They advised students to tailor their resumes to highlight skills and projects that align with potential internship roles.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How to Make a Good GitHub Repo</h3>
          <p className="text-muted-foreground">The speakers discussed best practices for creating a compelling GitHub repository:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Organized Structure:</strong> Use clear directories and maintain a clean project structure.</li>
            <li><strong>Descriptive README:</strong> Include a comprehensive README file with project overview, setup instructions, usage examples, and contribution guidelines.</li>
            <li><strong>Documentation:</strong> Regularly update documentation and ensure code is well-commented.</li>
            <li><strong>Version Control:</strong> Utilize branches effectively and maintain a consistent commit history.</li>
            <li><strong>Company Evaluation:</strong> Companies often evaluate candidates by reviewing their GitHub profiles.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Essentials of Proper Documentation and README Files</h3>
          <p className="text-muted-foreground">Effective documentation is crucial for the usability and maintainability of a project:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>README Files:</strong> Should provide a summary of the project, installation steps, usage instructions, and contact information.</li>
            <li><strong>Code Comments:</strong> Write clear comments to explain complex logic or code sections.</li>
            <li><strong>Contributing Guidelines:</strong> Provide instructions for contributors on how to report issues, submit changes, and follow coding standards.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Ideas for Final Year Projects</h3>
          <p className="text-muted-foreground">The session included brainstorming for innovative final year project ideas:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>AI-Powered Chatbots:</strong> Develop chatbots with advanced conversational abilities for specific domains.</li>
            <li><strong>Blockchain-Based Applications:</strong> Explore blockchain for secure transactions or decentralized apps.</li>
            <li><strong>IoT Solutions:</strong> Create IoT-based systems for smart home or environmental monitoring.</li>
            <li><strong>Augmented Reality:</strong> Build AR applications for educational or entertainment purposes.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Doubt Solving</h3>
          <p className="text-muted-foreground">
            The AMA also featured a Q&A segment where students and professionals posed their queries. The speakers addressed questions on various topics such as career advice, project development challenges, and industry trends.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p className="text-muted-foreground">
            The AMA session with Aaditya and Harsh provided valuable insights into career development, project management, and technical documentation. Attendees gained practical advice on securing internships, creating effective GitHub repositories, and enhancing project documentation.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default DiscordAMA;
