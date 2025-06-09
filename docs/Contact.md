---
layout: default
title: Contact Us
nav_order: 9
---

# Contact Us

<style>
  /* Center the container and give some padding */
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
  }

  /* Style the header with a white color */
  h1 {
    font-family: 'Arial', sans-serif;
    font-size: 36px;
    color: #ffffff; /* White color */
    margin-bottom: 20px;
  }

  /* Create a responsive layout for icons */
  .social-icons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }

  /* Style each icon container */
  .social-icons a {
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  /* Add hover effects for the icons */
  .social-icons a:hover {
    transform: scale(1.2);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  }

  /* Style the icons */
  .social-icons img {
    width: 50px;
    height: 50px;
  }

  /* Style for mobile screens */
  @media (max-width: 768px) {
    .social-icons {
      flex-wrap: wrap;
    }
    .social-icons img {
      width: 40px;
      height: 40px;
    }
  }
</style>

<div class="contact-container">
  <h1>Get in Touch</h1>

  <div class="social-icons">
    <a href="https://twitter.com/AILucknow" title="Twitter">
      <img src="/assets/icons/x.png" alt="Twitter"/>
    </a>
    <a href="https://discord.gg/QKw67PDZUm" title="Discord">
      <img src="/assets/icons/discord.png" alt="Discord"/>
    </a>
    <a href="YOUR_FACEBOOK_PROFILE_URL" title="Facebook">
      <img src="/assets/icons/facebook.png" alt="Facebook"/>
    </a>
    <a href="https://www.instagram.com/lucknow_ai/" title="Instagram">
      <img src="/assets/icons/insta.png" alt="Instagram"/>
    </a>
    <a href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" title="WhatsApp">
      <img src="/assets/icons/whatsapp.png" alt="whatsapp"/>
    </a>
  </div>
</div>
