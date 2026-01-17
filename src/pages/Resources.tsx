import MainLayout from "@/components/layout/MainLayout";

const Resources = () => {
  return (
    <MainLayout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-foreground text-3xl font-bold mb-6">Table of contents</h1>
        
        <ol className="list-decimal pl-6 text-foreground/90 space-y-2 mb-8">
          <li><a href="#ai-career-toolkit" className="text-primary hover:underline">AI Career Toolkit</a></li>
          <li><a href="#learning-resources" className="text-primary hover:underline">Learning Resources</a></li>
        </ol>
        
        <hr className="border-border my-6" />
        
        {/* AI Career Toolkit Section */}
        <h2 id="ai-career-toolkit" className="text-2xl font-bold text-foreground mt-8 mb-4">1. AI-Career-Toolkit</h2>
        
        <hr className="border-border my-4" />
        
        <h1 className="text-3xl font-bold text-foreground mb-4">🚀 AI-Career-Toolkit</h1>
        
        <div className="flex gap-2 mb-4">
          <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" />
          <a href="http://makeapullrequest.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
          </a>
          <a href="https://discord.gg/QKw67PDZUm" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Discord-Community-orange" alt="Community" />
          </a>
        </div>
        
        <p className="text-foreground/90 font-semibold mb-4">
          A comprehensive resource hub for launching and advancing careers in AI, ML, and related fields.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-6 mb-4">🌟 What's Inside</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>📝 <strong>Resume Templates</strong>: Tailored for AI/ML roles</li>
          <li>💼 <strong>Portfolio Project Ideas</strong>: Inspire your next showcase project</li>
          <li>🎤 <strong>Interview Prep</strong>: Common questions and best practices</li>
          <li>🔍 <strong>Job Search Strategies</strong>: Tips for finding and landing AI positions</li>
          <li>🗺️ <strong>Learning Roadmaps</strong>: Curated paths for different AI specializations</li>
          <li>📊 <strong>Industry Insights</strong>: Stay updated with the latest AI trends</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Resume Templates</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-4 py-2 text-left text-foreground">Repository</th>
                <th className="px-4 py-2 text-left text-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="text-foreground/90">
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/hashirshoaeb/home" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">home</a></td>
                <td className="px-4 py-2">A beautiful portfolio template for developers</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/rishabhnmishra/Portfolio-Website-Template" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Portfolio-Website-Template</a></td>
                <td className="px-4 py-2">A simple and elegant portfolio template</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/diiegopereira/freemo" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">freemo</a></td>
                <td className="px-4 py-2">A free, modern portfolio template</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/hrishikeshpaul/portfolio-template-v2" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">portfolio-template-v2</a></td>
                <td className="px-4 py-2">A sleek, customizable portfolio template</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/VitoMedlej/free-developer-portfolio-template" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">free-developer-portfolio-template</a></td>
                <td className="px-4 py-2">A modern, responsive portfolio template for developers</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/templatecookie/albert-html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">albert-html</a></td>
                <td className="px-4 py-2">A clean and minimalist portfolio template</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/mrarzimanli/portfolio" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">portfolio</a></td>
                <td className="px-4 py-2">A versatile portfolio template with various sections</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2"><a href="https://github.com/ManishReddyN/diy-portfolio" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">diy-portfolio</a></td>
                <td className="px-4 py-2">A customizable, DIY portfolio template</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🎯 Our Mission</h2>
        <p className="text-foreground/90">
          To empower the next generation of AI professionals with practical tools, templates, and knowledge to stand out in a competitive job market.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🤝 Contributing</h2>
        <p className="text-foreground/90">
          We welcome contributions! Whether you're sharing your success story, a helpful resource, or improving existing content, your input helps the community grow.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">📚 Start Your AI Career Journey</h2>
        <p className="text-foreground/90">
          Explore the toolkit, build your skills, and take the next step in your AI career. Your future in AI starts here!
        </p>
        <p className="text-foreground/90 mt-4 font-semibold">
          AI-Career-Toolkit is a community-driven project.
        </p>
        <p className="text-foreground/90 mt-2">
          Use these resources as inspiration and adapt them to showcase your unique skills and experiences.
        </p>
        
        <hr className="border-border my-8" />
        
        {/* Learning Resources Section */}
        <h2 id="learning-resources" className="text-2xl font-bold text-foreground mt-8 mb-4">2. Learning Resources</h2>
        
        <hr className="border-border my-4" />
        
        <h1 className="text-3xl font-bold text-foreground mb-4">An Ultimate Compilation of AI Resources for Mathematics, Machine Learning and Deep Learning</h1>
        
        <h2 className="text-xl font-italic text-foreground/80 mb-6">Knowledge Not Shared is wasted. - Clan Jacobs</h2>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">This collection is a compilation of Excellent ML and DL Tutorials created by the people below</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-1">
          <li><a href="http://karpathy.github.io/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Andrej Karpathy blog</a></li>
          <li><a href="https://e2eml.school/blog.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Brandon Roher</a></li>
          <li><a href="https://iamtrask.github.io/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Andrew Trask</a></li>
          <li><a href="https://jalammar.github.io/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Jay Alammar</a></li>
          <li><a href="https://ruder.io/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Sebastian Ruder</a></li>
          <li><a href="https://distill.pub/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Distill</a></li>
          <li><a href="https://www.youtube.com/user/joshstarmer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">StatQuest with Josh Starmer</a></li>
          <li><a href="https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">sentdex</a></li>
          <li><a href="https://www.youtube.com/user/lexfridman" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lex Fridman</a></li>
          <li><a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">3Blue1Brown</a></li>
          <li><a href="https://www.youtube.com/user/Zan560" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Alexander Amini</a></li>
          <li><a href="https://www.youtube.com/user/shiffman" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">The Coding Train</a></li>
          <li><a href="https://colah.github.io/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Christopher Olah</a></li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Communities to Follow</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li>
            <a href="https://www.meetup.com/AICoimbatore/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">AI Coimbatore</a> - Join here 🔗⬇️
            <ul className="list-disc pl-6 mt-1">
              <li><a href="https://t.me/joinchat/MmtTDRUcEqIuAPpr6Ph0Jw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Telegram : For Daily Updates</a></li>
              <li><a href="https://www.facebook.com/groups/440187506472896/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook : Coimbatore School of AI</a></li>
            </ul>
          </li>
          <li>
            <a href="https://www.tensorflow.org/community/groups" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">TensorFlow User Group Coimbatore</a>
            <ul className="list-disc pl-6 mt-1">
              <li><a href="https://www.meetup.com/TFUGCbe/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Meetup : TFUGCbe</a></li>
              <li><a href="https://www.facebook.com/groups/2425901487658992/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook : TFUGCbe</a></li>
            </ul>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Data Science and how to get started?</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/watch?v=I74ymkoNTnw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">🖥️ HOW TO GET STARTED WITH MACHINE LEARNING!</a></li>
          <li><a href="https://www.datacamp.com/community/blog/how-to-build-a-meaningful-career-in-data-science" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">How to Build a Meaningful Career in Data Science</a></li>
          <li><a href="https://hackernoon.com/my-self-created-ai-masters-degree-ddc7aae92d0e" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">My Self-Created Artificial Intelligence Masters Degree</a></li>
          <li><a href="https://www.pyimagesearch.com/start-here/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">PyImageSearch</a></li>
          <li><a href="https://www.mrdbourke.com/5-beginner-friendly-steps-to-learn-machine-learning/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">5 Beginner Friendly Steps to Learn Machine Learning and Data Science with Python</a></li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intro to ML</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/watch?v=IpGxLWOIZy4" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Luis Serrano: A Friendly Introduction to Machine Learning</a></li>
          <li><a href="https://www.youtube.com/watch?v=Gv9_4yMHFhI" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">StatQuest: A Gentle Introduction to Machine Learning</a></li>
          <li><a href="https://vas3k.com/blog/machine_learning/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Machine Learning For Everyone</a> - Summarizes Machine Learning algorithms and their applications in simple words with real-world examples.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Anyone can do Machine Learning</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://teachablemachine.withgoogle.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Teachable Machine</a> - Train a computer to recognize your own images, sounds, & poses. A fast, easy way to create machine learning models for your sites, apps, and more – no expertise or coding required.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">MOOCs</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.coursera.org/learn/machine-learning" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Machine Learning by Andrew Ng, Stanford</a> - IMDB 10/10 LOL :P</li>
          <li><a href="https://www.datacamp.com/tracks/data-engineer-with-python" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Datacamp : Data Engineer with Python</a></li>
          <li><a href="https://classroom.udacity.com/courses/ud120" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Intro to Machine Learning</a> - Topics Covered Naive Bayes, SVM, Decision Trees, Regressions, Outliers, Clustering, Feature Scaling, Text Learning, Feature Selection, PCA, Validation, Evaluation Metrics</li>
          <li><a href="https://classroom.udacity.com/courses/ud187" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Intro to TensorFlow for Deep Learning</a> - The Best Course for Learning TensorFlow</li>
          <li><a href="https://end-to-end-machine-learning.teachable.com/courses/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">End-to-End Machine Learning</a></li>
          <li><a href="https://www.nvidia.com/en-us/deep-learning-ai/education/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">NVIDIA DEEP LEARNING INSTITUTE</a></li>
          <li><a href="http://course18.fast.ai/ml" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Introduction to Machine Learning for Coders!</a></li>
          <li><a href="https://course.fast.ai/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Practical Deep Learning for Coders, v3</a></li>
          <li><a href="https://www.fast.ai/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">FastAI</a></li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Courses from Top Universities</h2>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Stanford University</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOca_Ovz1DvdtWuz8BfSWL2" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS221 - Artificial Intelligence: Principles and Techniques by Percy Liang and Dorsa Sadigh</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS229 - Machine Learning by Andrew Ng</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS230 - Deep Learning by Andrew Ng</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS231n - Convolutional Neural Networks for Visual Recognition by Fei-Fei Li and Andrej Karpathy</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS224n - Natural Language Processing with Deep Learning by Christopher Manning</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS234 - Reinforcement Learning by Emma Brunskill</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS330 - Deep Multi-task and Meta Learning by Chelsea Finn</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLoROMvodv4rNiJRchCzutFw5ItR_Z27CM" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS25 - Transformers United</a></li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Carnegie Mellon University</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/playlist?list=PL8PYTP1V4I8D0UkqW2fEhgLrnlDW9QK7z" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI 11-711: Advanced NLP by Graham Neubig</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PL8PYTP1V4I8AkaHEJ7lOOrlex-pcxS-XV" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI 11-747: Neural Networks for NLP by Graham Neubig</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PL8PYTP1V4I8BhCpzfdKKdd1OnTfLcyZr7" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI 11-737: Multilingual NLP by Graham Neubig</a></li>
          <li><a href="https://www.youtube.com/channel/UCqlHIJTGYhiwQpNuPU5e2gg/videos" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI 11-777: Multimodal Machine Learning by Louis-Philippe Morency</a></li>
          <li><a href="https://www.youtube.com/channel/UC8hYZGEkI2dDO8scT8C5UQA/playlists" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI 11-785: Introduction to Deep Learning by Bhiksha Raj and Rita Singh</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PL8PYTP1V4I8A1CpCzURXAUa6H4HO7PF2c" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CS/LTI Low Resource NLP Bootcamp 2020 by Graham Neubig</a></li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Massachusetts Institute of Technology</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">6.S191 - Introduction to Deep Learning by Alexander Amini and Ava Amini</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">6.S094 - Deep Learning by Lex Fridman</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PLCpMvp7ftsnIbNwRnQJbDNRqO6qiN3EyH" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">6.S192 - Deep Learning for Art, Aesthetics, and Creativity by Ali Jahanian</a></li>
        </ul>
        
        <h3 className="text-xl font-bold text-foreground mt-6 mb-3">University College London</h3>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/watch?v=2pWv7GOvuf0" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">COMP M050 Reinforcement Learning by David Silver</a></li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">YouTube ML Playlists</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-2">
          <li><a href="https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Machine Learning by StatQuest with Josh Starmer</a> ▶️</li>
          <li><a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YJ3XfHhT2Mm4Y5I99nrIKX" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Intelligence and Learning by The Coding Train</a> ▶️</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Important YouTube 🎬 Channels in the field of AI/ML/RL/DS</h2>
        <ul className="list-disc pl-6 text-foreground/90 space-y-1 columns-2">
          <li><a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">3Blue1Brown</a></li>
          <li><a href="https://www.youtube.com/user/joshstarmer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">StatQuest with Josh Starmer</a></li>
          <li><a href="https://www.youtube.com/user/sentdex" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Sentdex</a></li>
          <li><a href="https://www.youtube.com/channel/UCgBncpylJ1kiVaPyP-PZauQ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Luis Serrano</a></li>
          <li><a href="https://www.youtube.com/user/BrandonRohrer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Brandon Rohrer</a></li>
          <li><a href="https://www.youtube.com/channel/UC4UJ26WkceqONNF5S26OiVw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">deeplizard</a></li>
          <li><a href="https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Tech With Tim</a></li>
          <li><a href="https://www.youtube.com/user/MicrosoftResearch" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Research</a></li>
          <li><a href="https://www.youtube.com/user/schafer5" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Corey Schafer</a></li>
          <li><a href="https://www.youtube.com/user/dataschool" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Data School</a></li>
          <li><a href="https://www.youtube.com/user/keeroyz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Two Minute Papers</a></li>
          <li><a href="https://www.youtube.com/user/Welch Labs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Welch Labs</a></li>
          <li><a href="https://www.youtube.com/user/Simplilearn" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Simplilearn</a></li>
          <li><a href="https://www.youtube.com/user/beaconelearning" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Great Learning</a></li>
          <li><a href="https://www.youtube.com/channel/UC9OeZkIwhzfv-_Cb7fCikLQ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DeepLearning.TV</a></li>
          <li><a href="https://www.youtube.com/channel/UC0rqucBdTuFTjJiefW5t-IQ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">TensorFlow</a></li>
          <li><a href="https://www.youtube.com/channel/UCcIXc5mJsHVYTZR1maL5l9w" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Deeplearning.ai</a></li>
          <li><a href="https://www.youtube.com/channel/UC0e3QhIYukixgh5VVpKHH9Q" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Code Bullet</a></li>
          <li><a href="https://www.youtube.com/user/edurekaIN" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">edureka!</a></li>
          <li><a href="https://www.youtube.com/channel/UCSHZKyawb77ixDdsGog4iWA" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Lex Fridman</a></li>
          <li><a href="https://www.youtube.com/user/Maaaarth" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">The Artificial Intelligence Channel</a></li>
          <li><a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a></li>
          <li><a href="https://www.youtube.com/channel/UC8mJ6DL1Q32UWyJUceoO8Jw" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">CloudxLab</a></li>
          <li><a href="https://www.youtube.com/user/Zan560" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Alexander Amini</a></li>
          <li><a href="https://www.youtube.com/user/HeatonResearch" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Jeff Heaton</a></li>
          <li><a href="https://www.youtube.com/user/abhisheksvnit" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Abhishek Thakur</a></li>
          <li><a href="https://www.youtube.com/user/shiffman" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">The Coding Train</a></li>
        </ul>
        
        <hr className="border-border my-8" />
      </article>
    </MainLayout>
  );
};

export default Resources;
