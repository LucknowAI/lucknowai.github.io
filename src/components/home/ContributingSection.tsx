const contributors = [
  {
    username: "monk1337",
    avatarUrl: "https://avatars.githubusercontent.com/u/17107749?v=4",
    profileUrl: "https://github.com/monk1337",
  },
  {
    username: "PrashantShuklaa",
    avatarUrl: "https://avatars.githubusercontent.com/u/34169844?v=4",
    profileUrl: "https://github.com/PrashantShuklaa",
  },
  {
    username: "AayushSharma-1",
    avatarUrl: "https://avatars.githubusercontent.com/u/94588354?v=4",
    profileUrl: "https://github.com/AayushSharma-1",
  },
  {
    username: "SaurabhChandra1024",
    avatarUrl: "https://avatars.githubusercontent.com/u/95095871?v=4",
    profileUrl: "https://github.com/SaurabhChandra1024",
  },
  {
    username: "SURYANSH-RAI",
    avatarUrl: "https://avatars.githubusercontent.com/u/79277130?v=4",
    profileUrl: "https://github.com/SURYANSH-RAI",
  },
];

const ContributingSection = () => {
  return (
    <section className="px-8 py-8">
      <h3 className="text-xl font-semibold text-foreground mb-4">Contributing</h3>
      <p className="text-muted-foreground mb-6">
        When contributing to this repository, please first discuss the change you
        wish to make via issue, email, or any other method with the owners of this
        repository before making a change. Read more about becoming a contributor
        in{" "}
        <a
          href="https://github.com/LucknowAI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          our GitHub repo
        </a>
        .
      </p>

      <h4 className="text-lg font-medium text-foreground mb-4">
        Thank you to the contributors of Lucknow AI!
      </h4>

      <div className="flex gap-2 flex-wrap">
        {contributors.map((contributor) => (
          <a
            key={contributor.username}
            href={contributor.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={contributor.username}
          >
            <img
              src={contributor.avatarUrl}
              alt={contributor.username}
              className="contributor-avatar"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContributingSection;
