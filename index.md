---
layout: default
title: Home
nav_order: 1
description: "Open Source AI Research & Mentorship"
permalink: /
---

<button class="btn js-toggle-dark-mode"> Change Theme</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
    toggleDarkMode.textContent = 'Dark Mode';
  } else {
    jtd.setTheme('dark');
    toggleDarkMode.textContent = 'Bright Mode';
  }
});
</script>

# Lucknow AI Labs
{: .fs-9 }

Open Source AI Research & Mentorship
{: .fs-6 .fw-300 }

[Get started now](https://github.com/LucknowAI){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0
.mr-2 } [Try Lucknow-GPT](https://lallanrag.vercel.app/){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }


<div style="text-align: left;">
    <div>
        <a href="https://twitter.com/AILucknow" title="Twitter" style="text-decoration: none;">
            <img src="/assets/icons/x.png" alt="Twitter" width="30" height="30"/>
        </a>
        <a href="https://discord.gg/QKw67PDZUm" title="Discord" style="text-decoration: none;">
            <img src="/assets/icons/discord.png" alt="Discord" width="30" height="30"/>
        </a>
        <a href="YOUR_FACEBOOK_PROFILE_URL" title="Facebook" style="text-decoration: none;">
            <img src="/assets/icons/facebook.png" alt="Facebook" width="30" height="30"/>
        </a>
        <a href="https://www.instagram.com/lucknow_ai/" title="Instagram" style="text-decoration: none;">
            <img src="/assets/icons/insta.png" alt="Instagram" width="30" height="30"/>
        </a>
        <a href="https://chat.whatsapp.com/DeJLSBFxejJ5r07ezpuyDx" title="WhatsApp" style="text-decoration: none;">
            <img src="/assets/icons/whatsapp.png" alt="whatsapp" width="30" height="30"/>
        </a>
    </div>
</div>


---



![Alt text](/assets/images/img.png "Optional title")
<!-- <div style="text-align: center;">
    <img src="/assets/images/ab.png" alt="Lucknow AI Community" width="400" height="300" title="Lucknow AI Community"/>
</div> -->

<!-- ![Alt text](/assets/images/tf.png "Optional title") -->
<!-- <div style="text-align: center;">
    <img src="/assets/images/tf.png" alt="Lucknow AI Community" width="200" height="200" title="Lucknow AI Community"/>
</div> -->


<div style="text-align: center; margin-bottom: -30px;">
    <img src="/assets/images/collaborators.png" alt="Lucknow AI Community" width="300" height="300" title="Lucknow AI Community"/>
</div>

<div style="text-align: center; margin-top: -10px;">
    <img src="/assets/images/tf.png" alt="Lucknow AI Community" width="200" height="200" title="Lucknow AI Community"/>
</div>


<!-- ### Contact Us -->

<!-- {: .important } -->

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. Read more about becoming a
contributor in [our GitHub repo](https://github.com/LucknowAI).

#### Thank you to the contributors of Lucknow AI!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>

### Code of Conduct

Lucknow AI is committed to fostering a welcoming community.

[View our Code of Conduct](https://github.com/LucknowAI) on our GitHub repository.

<div style="text-align: center; margin-top: -10px;">
    <img src="/assets/images/lucknow_illustration.f2f78acc.png" alt="Lucknow AI Community" width="600" height="200" title="Lucknow AI Community"/>
    <div style="font-size: 4px; color: gray">Source: https://gdglucknow.web.app</div>
</div>
