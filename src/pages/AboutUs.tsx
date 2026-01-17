import MainLayout from "@/components/layout/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-2">Welcome To Lucknow AI</h1>
        
        <p className="text-primary italic text-lg mb-6">Scientia potentia est (knowledge is power)</p>
        
        <p className="text-foreground/90">
          Hi, Thank you all for joining the community!
        </p>
        
        <p className="text-foreground/90">
          I wanted to share the story behind why we started this and what drives us. I recently moved to Lucknow and wanted to connect with fellow developers, open-source enthusiasts, and hackers. However, I found that Lucknow lacks such a technology culture and community.
        </p>
        
        <p className="text-foreground/90">
          I remember wishing as a college student that I had a mentor to guide me and clarify my doubts. I want the next generation to have those opportunities. So I spoke with friends from Lucknow who now work at various companies and agreed to give back by mentoring youth interested in AI & ML. With that goal, We founded Lucknow AI to advance AI literacy and skills through collaborative workshops, meetups, paper discussions, and community growth.
        </p>
        
        <p className="text-foreground/90">
          I am Aaditya (Ankit), a senior research engineer at{" "}
          <a 
            href="https://www.saama.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Saama AI Research Lab
          </a>{" "}
          with over 6+ years in core AI research. I love hacking things together, building open-source tools, and publishing state-of-the-art research. You can find more about my background & research at{" "}
          <a 
            href="https://aadityaura.github.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            aadityaura.github.io
          </a>
        </p>
        
        <p className="text-foreground/90">
          You might be surprised to know that no one in the Lucknow AI community is paid or sponsored. We are just a group of coding geeks and hackers who are passionate about growing the local AI ecosystem!
        </p>
        
        <p className="text-foreground/90">
          We nurture Lucknow AI like our own child, volunteering time outside work or college to support the community. Seniors mentor newcomers not due to any obligation but out of a genuine desire to uplift. We contribute open-source code, curate datasets, brainstorm ideas, analyze research papers and more in the quest to push the boundaries of what AI can achieve. And we do it together as one unstoppable, collaborative force!
        </p>
        
        <p className="text-foreground/90">
          This is a safe space where you can learn, teach, create, and grow. Imagine the breakthrough innovations we can create when we come together as a supportive, tight-knit community!
        </p>
        
        <p className="text-foreground/90">
          Let's put Lucknow on the map in AI and have fun along the way.
        </p>
        
        <p className="text-foreground/90">
          If you share this vision, then you have found your tribe. Welcome home!
        </p>
        
        <p className="text-foreground/90">
          Excited for the days ahead,
        </p>
        
        <p className="text-foreground/90 font-semibold">
          ~ Lucknow AI
        </p>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default AboutUs;
