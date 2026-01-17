import MainLayout from "@/components/layout/MainLayout";

const Volunteer = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-6">Volunteer Opportunities at Lucknow AI</h1>
        
        <div className="mb-6">
          <p className="text-foreground/90 font-semibold mb-2">Table of contents</p>
          <ul className="list-disc pl-6 text-foreground/90 space-y-1">
            <li><a href="#content-development" className="text-primary hover:underline">Content Development and Education</a></li>
            <li><a href="#technical-support" className="text-primary hover:underline">Technical and IT Support</a></li>
            <li><a href="#creative-multimedia" className="text-primary hover:underline">Creative and Multimedia</a></li>
            <li><a href="#community-engagement" className="text-primary hover:underline">Community Engagement and Outreach</a></li>
            <li><a href="#research-development" className="text-primary hover:underline">Research and Development</a></li>
            <li><a href="#organizational-support" className="text-primary hover:underline">Organizational and Administrative Support</a></li>
            <li><a href="#application-form" className="text-primary hover:underline">General Volunteer Application Form</a></li>
          </ul>
        </div>
        
        <hr className="border-border my-6" />
        
        <h2 id="content-development" className="text-2xl font-bold text-foreground mt-8 mb-4">Content Development and Education</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Content Creation</strong>: Help in articles, blogs, educational content on AI/ML.</li>
          <li><strong>Workshops/Webinars</strong>: Helping in Conducting and facilitating educational sessions.</li>
          <li><strong>Mentoring</strong>: Guiding Juniors/students in AI/ML.</li>
        </ul>
        <p className="text-foreground/90 mt-4">
          Opportunities in this category are ideal for those with a knack for teaching and content creation.
        </p>
        
        <hr className="border-border my-6" />
        
        <h2 id="technical-support" className="text-2xl font-bold text-foreground mt-8 mb-4">Technical and IT Support</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>IT Management</strong>: Support for digital infrastructure and resource management.</li>
          <li><strong>GitHub Maintenance</strong>: Managing PRs and project upkeep.</li>
          <li><strong>Website Management</strong>: Updating and ensuring website functionality.</li>
        </ul>
        <p className="text-foreground/90 mt-4">Technical roles</p>
        
        <hr className="border-border my-6" />
        
        <h2 id="creative-multimedia" className="text-2xl font-bold text-foreground mt-8 mb-4">Creative and Multimedia</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Graphic Design</strong>: Creating visual content for digital platforms and events.</li>
          <li><strong>Photography/Videography</strong>: Documenting events for promotional use.</li>
        </ul>
        <p className="text-foreground/90 mt-4">
          These roles are perfect for creatively inclined individuals with skills in design and multimedia.
        </p>
        
        <hr className="border-border my-6" />
        
        <h2 id="community-engagement" className="text-2xl font-bold text-foreground mt-8 mb-4">Community Engagement and Outreach</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Community Outreach</strong>: Engaging and promoting the mission in various communities.</li>
          <li><strong>Social Media</strong>: Managing online groups and content dissemination.</li>
          <li><strong>Group Administration</strong>: Overseeing Discord and WhatsApp groups.</li>
        </ul>
        <p className="text-foreground/90 mt-4">
          Engagement roles are suited for those with strong communication skills and a passion for community building.
        </p>
        
        <hr className="border-border my-6" />
        
        <h2 id="research-development" className="text-2xl font-bold text-foreground mt-8 mb-4">Research and Development</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Research Projects</strong>: Collaborative innovation and project coordination in AI/ML.</li>
        </ul>
        <p className="text-foreground/90 mt-4">
          Ideal for individuals interested in cutting-edge AI/ML research and development.
        </p>
        
        <hr className="border-border my-6" />
        
        <h2 id="organizational-support" className="text-2xl font-bold text-foreground mt-8 mb-4">Organizational and Administrative Support</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Fundraising</strong>: Assisting in fundraising and sponsor relations.</li>
          <li><strong>Legal/Compliance</strong>: Ensuring legal adherence and managing intellectual property.</li>
          <li><strong>Translation/Localization</strong>: Making content accessible in multiple languages.</li>
          <li><strong>Event Organization</strong>: Planning and executing meetups and events.</li>
        </ul>
        <p className="text-foreground/90 mt-4">
          These roles require organizational skills and attention to detail, ideal for those who excel in administrative tasks.
        </p>
        
        <hr className="border-border my-6" />
        
        <h2 id="application-form" className="text-2xl font-bold text-foreground mt-8 mb-4">General Volunteer Application Form</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><strong>Fill the form given below!</strong></li>
        </ul>
        <p className="text-foreground/90 mt-4">
          Join the movement to make a difference in the community by volunteering with us. Whether you're looking to gain new skills, meet like-minded individuals, we have a variety of opportunities available. By filling out our application form, you'll be taking the first step towards becoming part of a dynamic team dedicated to Accelerate AI Awareness in Lucknow. Our volunteer program is designed to be flexible and accommodating, so whether you have a few hours a week or a few days a month, we have a role that's right for you. So why wait? Fill out our application form today and start making a difference in the lives of others!
        </p>
        
        <div className="mt-6 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-foreground/70 text-center">
            Google Forms embedded content - Please allow cookies to view the form or{" "}
            <a 
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              click here to access the form directly
            </a>
          </p>
        </div>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default Volunteer;
