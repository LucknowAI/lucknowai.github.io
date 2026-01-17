import collaboratorsImg from "@/assets/images/collaborators.png";
import tfImg from "@/assets/images/tf.png";

const CollaborationsSection = () => {
  return (
    <section className="px-8 py-8">
      {/* Hidden mission image - only shown on large screens or specific layout */}
      <div className="hidden lg:block mb-8">
        {/* This was the img.png image shown in the original layout */}
      </div>

      {/* Collaborations Title */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        <span className="text-muted-foreground">Colla</span>
        <span className="text-primary">bo</span>
        <span className="text-foreground">rations</span>
      </h2>

      {/* TensorFlow Logo */}
      <div className="flex justify-center">
        <img
          src={tfImg}
          alt="TensorFlow User Group Lucknow"
          className="max-w-xs"
        />
      </div>
    </section>
  );
};

export default CollaborationsSection;
