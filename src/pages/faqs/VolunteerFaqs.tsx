import MainLayout from "@/components/layout/MainLayout";

const VolunteerFaqs = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How can I volunteer at Lucknow AI Labs?</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can volunteer by filling out the application form on our website or by contacting us directly via email. We welcome individuals with a passion for AI, education, and community outreach to join our mission of spreading AI awareness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: Do I need AI or technical expertise to volunteer?</h3>
            <p className="text-muted-foreground leading-relaxed">
              While having AI or technical expertise is beneficial for certain roles, it is not a requirement for all volunteer positions. We also need volunteers for administrative tasks, event organization, outreach, and content creation. We provide training and guidance to help volunteers succeed in their roles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: What is the time commitment for volunteering?</h3>
            <p className="text-muted-foreground leading-relaxed">
              The time commitment varies depending on the role. Some volunteer positions may require a few hours a week, while others may be more involved during specific events or projects. We are flexible and will work with you to find a commitment level that suits your schedule.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: Can I volunteer remotely?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes, many of our volunteer opportunities, such as content creation, social media management, and technical support, can be done remotely. We strive to make volunteering accessible to people from all locations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: What are the benefits of volunteering with Lucknow AI Labs?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Volunteering with Lucknow AI Labs gives you the chance to contribute to AI awareness, develop your skills, and gain experience working in a nonprofit focused on cutting-edge technology. You'll also have the opportunity to network with AI professionals and make a positive impact in your community.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: Will I receive training or support as a volunteer?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes, we provide training and guidance to all volunteers, especially for roles that require specific skills. Our team will support you throughout your volunteering journey, ensuring you feel confident and equipped to contribute effectively.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: Can I volunteer if I'm a student?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Absolutely! We encourage students to volunteer as it's a great way to learn more about AI and gain hands-on experience. Whether you're studying AI, computer science, or any other field, we have opportunities that will allow you to contribute meaningfully.
            </p>
          </div>
        </div>

        <hr className="border-border mt-12" />
      </div>
    </MainLayout>
  );
};

export default VolunteerFaqs;
