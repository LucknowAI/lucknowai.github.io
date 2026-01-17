import MainLayout from "@/components/layout/MainLayout";
import ragRishi from "@/assets/images/rag_rishi.jpeg";
import machineMantri from "@/assets/images/machine_mantri.jpeg";
import blockchainBabu from "@/assets/images/blockchain_babu.jpeg";
import speechShastri from "@/assets/images/speech_shastri.jpeg";
import diffusionDada from "@/assets/images/diffusion_dada.jpeg";

interface MemberCardProps {
  emoji: string;
  title: string;
  image: string;
  name: string;
  linkedIn: string;
  description: string;
  moreLink: string;
}

const MemberCard = ({ emoji, title, image, name, linkedIn, description, moreLink }: MemberCardProps) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-foreground mb-4">{emoji} {title}</h2>
    <img 
      src={image} 
      alt={title}
      className="w-48 h-48 object-cover rounded-lg mb-4"
    />
    <p className="text-foreground/90 mb-2">
      <strong>Name:</strong>{" "}
      <a 
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {name}
      </a>
    </p>
    <p className="text-foreground/90 mb-4">
      <strong>Description:</strong> {description}
    </p>
    <a 
      href={moreLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      More about {title}
    </a>
    <hr className="border-border my-6" />
  </div>
);

const AIBaithak = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-2">🎉 AI Baithak ke Sadasya 🎉</h1>
        
        <p className="text-foreground/90 mb-6">
          Meet the tech-savvy members of our community! 🚀 These are the masterminds driving innovation with AI, machine learning, and blockchain.
        </p>
        
        <hr className="border-border my-6" />
        
        <MemberCard
          emoji="🎯"
          title="Rag Rishi"
          image={ragRishi}
          name="Abhishek Sahu"
          linkedIn="https://www.linkedin.com/in/a-sahu16/"
          description="Abhishek is a flutter developer by profession, but his heart truly beats for RAG (Retrieval-Augmented Generation). Wherever he sees documents, the first words out of his mouth are, 'Arey, ispe RAG kyun nahi laga rahe ho?' His passion for optimizing retrieval systems and vector databases makes him a true RAG devotee 📚. But wait, there's more—Abhishek is also into actual Raag! 🎶 When he's not diving into neural networks, he's probably singing classical Indian ragas, proving that his skills extend beyond just tech. Whether it's a complex query or a classical tune, Rag Rishi will always find the right note! 🎼"
          moreLink="https://www.linkedin.com/in/a-sahu16/"
        />
        
        <MemberCard
          emoji="🛠️"
          title="Machine Mantri"
          image={machineMantri}
          name="Prashant"
          linkedIn="https://www.linkedin.com/in/prashant-shukla30/"
          description="Prashant, aka Machine Mantri, runs his own ministry of robots and AI! From making bots play drums 🥁 to ruling the world of Arduino and edge devices, he's got it all under control. When he's not coding a bot's next move, you'll find him binge-watching his favorite anime for even more futuristic inspiration 🌟. If there's a tech problem, Machine Mantri will solve it—probably with a side of robot rock music! 🎸🤖"
          moreLink="https://www.linkedin.com/in/prashant-shukla30/"
        />
        
        <MemberCard
          emoji="🔗"
          title="Blockchain Babu"
          image={blockchainBabu}
          name="Harsh Joshi"
          linkedIn="https://www.linkedin.com/in/getharsh/"
          description="Harsh's mantra is simple: 'Centralization ko chhodo, sab kuch blockchain pe lao!' Whether it's AI, chai, or even your friendships, Harsh believes everything should run on a decentralized ledger 🔐. From smart contracts to Web3, Blockchain Babu ke hote hue, even your chai breaks might get decentralized! ☕"
          moreLink="https://www.linkedin.com/in/getharsh/"
        />
        
        <MemberCard
          emoji="🎤"
          title="Speech Shastri"
          image={speechShastri}
          name="Gauraangi"
          linkedIn="https://www.linkedin.com/in/gauraangi/"
          description="Gauraangi, aka Speech Shastri, doesn't just hear voices—she makes AI listen to them! A master of turning sound into smarts, she's the one who cracked the code at Hack2Crack Hackathon, leaving everyone wondering if she secretly trains AI by making it recite Sanskrit shlokas. 📜 From building speech models to fine-tuning them like a classical Raag 🎶, Speech Shastri's mantra is simple: 'If it talks, I'll make AI understand it!' When she's not making machines listen, she's probably convincing them to sing back! 🎵"
          moreLink="https://www.linkedin.com/in/gauraangi/"
        />
        
        <MemberCard
          emoji="🤖"
          title="Diffusion Dada"
          image={diffusionDada}
          name="Kaif"
          linkedIn="https://example.com/diffusion-dada"
          description="Kaif is your go-to guy when it comes to anything related to image-based models. You've got a blurry image, an artifact problem, or just a random curiosity? Don't worry, Kaif's first reaction is always, 'Chalo Stable Diffusion lagate hai ispe!' His life revolves around collecting data, fine-tuning models, and optimizing the diffusion process as if it were his morning chai ☕. Whether it's upscaling, inpainting, or generating new visuals, Kaif can tackle it all—just don't be surprised if he starts giving life advice based on latent spaces. When in doubt, let Diffusion Dada sort your pixels out! 🎨"
          moreLink="https://example.com/diffusion-dada"
        />
        
        <h2 className="text-2xl font-bold text-foreground mb-4">🎙️ Join Our Discord</h2>
        <p className="text-foreground/90 mb-4">
          Got any questions related to images, RAG, blockchain, or AI? Feel free to ask our members on Discord!
        </p>
        <a 
          href="https://discord.gg/QKw67PDZUm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Join Lucknow AI Discord
        </a>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default AIBaithak;
