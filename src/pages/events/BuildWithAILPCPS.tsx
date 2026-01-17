import MainLayout from "@/components/layout/MainLayout";

const BuildWithAILPCPS = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Build with AI Workshop at LPCPS</h1>
        
        <div className="note-block note-block-purple">
          <p className="text-yellow-400 font-bold text-sm mb-2">NOTE</p>
          <p className="text-foreground">Date: April 27, 2025</p>
        </div>

        <div className="note-block note-block-dark">
          <p className="text-foreground">Venue: LPCPS, Lucknow, Uttar Pradesh – 226001</p>
        </div>

        <div className="note-block note-block-olive">
          <p className="text-foreground">Organizers: Google Developer Groups | Collaborations: Lucknow AI Labs, TFUG Lucknow</p>
        </div>

        <hr className="border-border" />

        <h2 className="text-2xl font-bold text-center text-primary">Coming Soon</h2>
        <p className="text-center text-muted-foreground">
          Event details will be updated soon. Stay tuned!
        </p>
      </div>
    </MainLayout>
  );
};

export default BuildWithAILPCPS;
