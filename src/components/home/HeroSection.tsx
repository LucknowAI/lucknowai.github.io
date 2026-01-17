import xIcon from "@/assets/icons/x.png";
import discordIcon from "@/assets/icons/discord.png";
import instaIcon from "@/assets/icons/insta.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";

const socialLinks = [
  {
    icon: xIcon,
    href: "https://twitter.com/AILucknow",
    alt: "Twitter",
  },
  {
    icon: discordIcon,
    href: "https://discord.gg/QKw67PDZUm",
    alt: "Discord",
  },
  {
    icon: instaIcon,
    href: "https://www.instagram.com/lucknow_ai/",
    alt: "Instagram",
  },
  {
    icon: whatsappIcon,
    href: "https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH",
    alt: "WhatsApp",
  },
];

const HeroSection = () => {
  return (
    <section className="px-8 py-2">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-foreground mb-2">Lucknow AI Labs</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Open Source AI Research & Mentorship
      </p>

      {/* CTA Button */}
      <a
        href="https://github.com/LucknowAI"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors mb-4"
      >
        Get started now
      </a>

      {/* Secondary Buttons */}
      <div className="flex gap-3 mb-6">
        <a
          href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-primary text-primary px-4 py-2 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Join Lucknow AI Labs
        </a>
        <button className="border border-border text-foreground px-4 py-2 rounded-md font-medium hover:bg-secondary transition-colors">
          Try Nawab-AI
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.alt}
          >
            <img src={link.icon} alt={link.alt} className="social-icon" />
          </a>
        ))}
      </div>

      <hr className="border-border" />
    </section>
  );
};

export default HeroSection;
