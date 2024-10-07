---
title: LAI FAQs
parent: FAQs
layout: default
nav_order: 1
---


<h1>Frequently Asked Questions</h1>

<div class="faq-container">
  <div class="faq-item">
    <h3 class="faq-question">Q: What is Lucknow AI Labs?</h3>
    <div class="faq-answer">
      <p>Lucknow AI Labs is a nonprofit organization dedicated to growing awareness about artificial intelligence (AI) and its applications. We focus on educating individuals, businesses, and communities on AI technologies while providing hands-on learning opportunities and resources.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 class="faq-question">Q: Who can benefit from Lucknow AI Labs’ programs?</h3>
    <div class="faq-answer">
      <p>Our programs are open to students, developers, entrepreneurs, and professionals from all industries who are interested in learning more about AI. We welcome anyone who wants to explore how AI can improve their skills or help their organization.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 class="faq-question">Q: How is Lucknow AI Labs funded?</h3>
    <div class="faq-answer">
      <p>As a nonprofit, we rely on donations, grants, and sponsorships to fund our activities. We also collaborate with educational institutions and other organizations to support our mission of spreading AI knowledge.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 class="faq-question">Q: How does Lucknow AI Labs ensure inclusivity in AI education?</h3>
    <div class="faq-answer">
      <p>We are committed to making AI education accessible to everyone, regardless of their background. Our workshops and events are designed to be inclusive, with resources for beginners and opportunities for underserved communities to learn about AI.</p>
    </div>
  </div>

  <div class="faq-item">
    <h3 class="faq-question">Q: How can I support Lucknow AI Labs?</h3>
    <div class="faq-answer">
      <p>You can support us by volunteering, donating, or participating in our events and workshops. Additionally, sharing our mission and helping spread AI awareness in your community contributes to our cause.</p>
    </div>
  </div>

  <!-- Add more FAQ items as needed -->
</div>

<script>
  document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
</script>

<!-- Custom CSS for the specified color scheme and hover animation -->
<style>
  /* Background and body color */
  body {
    background-color: #27262b;
    color: #f0f0f0;
    font-family: Arial, sans-serif;
  }

  /* FAQ container */
  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #2e2d33;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  /* Question styling */
  .faq-question {
    cursor: pointer;
    padding: 15px;
    background-color: #362f51;
    color: #ffffff;
    border-left: 5px solid #381885;
    margin-bottom: 5px;
    font-size: 18px;
    margin-top: 0; /* Remove top margin to group with label */
    transition: background-color 0.3s ease, transform 0.3s ease;/* Smooth transition */
    border-radius: 6px;
  }

  /* Hover effect for questions */
  .faq-question:hover {
    background-color: #3e3867;
    transform: scale(1.02); /* Slightly scale up on hover */
  }

  /* Answer styling */
  .faq-answer {
    padding: 15px;
    display: none;
    background-color: #524d3c; /* Answer panel background color */
    color: #ffffff; /* Answer text color */
    border-left: 5px solid #e7af06; /* Left border for answer panel */
    margin-bottom: 20px;
    border-radius: 6px;
  }

  /* FAQ item styling */
  .faq-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #444; /* Separator between FAQ items */
    padding-bottom: 10px;
  }

  /* FAQ heading */
  h1 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }
</style>
