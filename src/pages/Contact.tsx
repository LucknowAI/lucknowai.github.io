import MainLayout from "@/components/layout/MainLayout";
import xIcon from "@/assets/icons/x.png";
import discordIcon from "@/assets/icons/discord.png";
import instaIcon from "@/assets/icons/insta.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";

const Contact = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-6">Contact Us</h1>
        
        <h1 className="text-foreground text-2xl font-bold mb-6">Get in Touch</h1>
        
        <div className="flex gap-6 items-center">
          <a 
            href="https://twitter.com/AILucknow"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <img src={xIcon} alt="Twitter" className="w-12 h-12 hover:opacity-80 transition-opacity" />
          </a>
          <a 
            href="https://discord.gg/QKw67PDZUm"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
          >
            <img src={discordIcon} alt="Discord" className="w-12 h-12 hover:opacity-80 transition-opacity" />
          </a>
          <a 
            href="https://www.instagram.com/lucknow_ai/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src={instaIcon} alt="Instagram" className="w-12 h-12 hover:opacity-80 transition-opacity" />
          </a>
          <a 
            href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 hover:opacity-80 transition-opacity" />
          </a>
        </div>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default Contact;
