import MainLayout from "@/components/layout/MainLayout";

const CommonlyAskedQuestions = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How can I start studying AI?</h3>
            <p className="text-muted-foreground leading-relaxed">
              To start studying AI, begin by learning programming languages like Python, as it's commonly used in AI development. You can also take online courses in AI, machine learning, and data science from platforms like Coursera, edX, or Udemy. Start with the basics of algorithms, data structures, and AI fundamentals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How can I apply AI to real-world problems?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Once you've learned the fundamentals, try applying AI to real-world problems by building projects such as a chatbot, image classifier, or recommendation system. You can also participate in Kaggle competitions or contribute to open-source AI projects to gain experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: What are the career opportunities in AI?</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI offers a wide range of career opportunities, including roles like AI engineer, data scientist, machine learning engineer, NLP specialist, and AI research scientist. Many industries, from healthcare to finance, are actively looking for AI talent to help build intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: What are the best online courses to learn AI?</h3>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-2">Some of the best online courses include:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Coursera: "Machine Learning" by Andrew Ng, "Deep Learning Specialization" by DeepLearning.AI</li>
                <li>edX: "Introduction to Artificial Intelligence" from MIT</li>
                <li>Udemy: "Artificial Intelligence A-Z™: Learn How to Build an AI"</li>
                <li>Fast.ai: Practical deep learning courses designed for beginners.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Q: How important is math for learning AI?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mathematics is essential for understanding the algorithms behind AI. Linear algebra, probability, statistics, and calculus are particularly important in areas like machine learning and deep learning. However, many practical AI tools and libraries abstract the math, allowing you to start building without deep mathematical knowledge.
            </p>
          </div>
        </div>

        <hr className="border-border mt-12" />
      </div>
    </MainLayout>
  );
};

export default CommonlyAskedQuestions;
