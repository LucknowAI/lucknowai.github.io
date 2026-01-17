import lucknowIllustration from "@/assets/images/lucknow_illustration.png";

const FooterSection = () => {
  return (
    <section className="px-8 py-8">
      {/* Illustration */}
      <div className="flex justify-center mb-4">
        <img
          src={lucknowIllustration}
          alt="Lucknow AI Community Illustration"
          className="max-w-lg w-full"
        />
      </div>
      <p className="text-center text-xs text-muted-foreground mb-8">
        Source:{" "}
        <a
          href="https://gdglucknow.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://gdglucknow.web.app
        </a>
      </p>

      <hr className="border-border mb-8" />

      {/* Footer Links */}
      <div className="flex justify-between items-center text-sm">
        <a href="#" className="text-primary hover:underline">
          Back to top
        </a>
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          Copyright © 2017 Lucknow AI. Distributed by an{" "}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            MIT license
          </a>
          . 
        </p>
      </div>

      <div className="mt-4">
        <a
          href="https://github.com/LucknowAI/lucknowai.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
        >
          Edit this page on GitHub
        </a>
      </div>
    </section>
  );
};

export default FooterSection;
