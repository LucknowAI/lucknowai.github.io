import { Link } from "react-router-dom";

const CodeOfConductSection = () => {
  return (
    <section className="px-8 py-8">
      <h3 className="text-xl font-semibold text-foreground mb-4">Code of Conduct</h3>
      <p className="text-muted-foreground mb-4">
        Lucknow AI is committed to fostering a welcoming community.
      </p>
      <p className="text-muted-foreground">
        <Link
          to="/code-of-conduct"
          className="text-primary hover:underline"
        >
          View our Code of Conduct
        </Link>{" "}
        on our GitHub repository.
      </p>
    </section>
  );
};

export default CodeOfConductSection;
