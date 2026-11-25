---
layout: home
title: Home
nav_order: 1
description: >-
  Lucknow AI Labs is a volunteer-run AI community in Lucknow and the first
  chapter of UPAI Labs. Meetups, hackathons, paper reading and open source.
permalink: /
---

{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign n_events = 0 -%}
{%- assign n_hackathons = 0 -%}
{%- assign n_papers = 0 -%}
{%- assign past = "" | split: "" -%}
{%- for e in site.data.events -%}
  {%- if e.status != "unconfirmed" and e.date < today -%}
    {%- assign n_events = n_events | plus: 1 -%}
    {%- assign past = past | push: e -%}
    {%- if e.type contains "hackathon" -%}{%- assign n_hackathons = n_hackathons | plus: 1 -%}{%- endif -%}
    {%- if e.type contains "paper-reading" -%}{%- assign n_papers = n_papers | plus: 1 -%}{%- endif -%}
  {%- endif -%}
{%- endfor -%}
{%- assign recent = past | reverse -%}

<section class="lai-hero" aria-label="Introduction">
  <p class="lai-hero-badge">Chapter 1 of UPAI Labs</p>
  <h1 class="lai-hero-title">Lucknow <span>AI Labs</span></h1>
  <p class="lai-hero-tagline">Open source AI research and mentorship</p>
  <p class="lai-hero-lead">A volunteer-run community where students and engineers in Lucknow learn, build and research AI together. Since November 2023.</p>
  <div class="lai-hero-actions">
    <a href="#join-the-community" class="btn btn-primary">Join the community</a>
    <a href="{{ '/projects/' | relative_url }}" class="btn">Explore our projects</a>
    <a href="https://github.com/LucknowAI" class="btn btn-ghost">Contribute on GitHub</a>
  </div>
  <div class="lai-hero-skyline" role="img" aria-label="Line drawing of the Lucknow skyline, with Rumi Darwaza and the Clock Tower"></div>
</section>

<ul class="lai-stats" aria-label="Lucknow AI Labs in numbers">
  <li><span class="lai-stat-number">{{ site.data.projects.active | size }}</span><span class="lai-stat-label">active open-source projects</span></li>
  <li><span class="lai-stat-number">{{ n_papers }}</span><span class="lai-stat-label">paper reading sessions</span></li>
  <li><span class="lai-stat-number">{{ n_hackathons }}</span><span class="lai-stat-label">hackathons</span></li>
  <li><span class="lai-stat-number">{{ n_events }}</span><span class="lai-stat-label">events since November 2023</span></li>
</ul>

<p class="lai-note">Counted from our <a href="{{ '/projects/' | relative_url }}">projects</a> and <a href="{{ '/events/' | relative_url }}">events</a> lists. Events include those run with AI Community Lucknow and other partner communities.</p>

<p class="lai-eyebrow">How it started</p>

## Our story

<div class="lai-story">
  <div class="lai-story-text">
    <p>Lucknow AI Labs started with a conversation in October 2023. Prashant Shukla and Ankit (Aaditya), both from Tech backgrounds, kept asking why Lucknow had no place where people meet, share ideas and build something bigger together: the guidance neither had found as students here. Ankit built the foundations, Prashant handled operations, and Abhishek Sahu soon joined them. Today it is the first chapter of UPAI Labs Foundation, focused on research and open source.</p>
    <p class="lai-more"><a href="{{ '/about/#how-it-started' | relative_url }}">How it started, in the founders' words</a></p>
  </div>
  <ol class="lai-timeline">
    <li><span class="lai-timeline-date">October 2023</span>The idea, over many conversations</li>
    <li><span class="lai-timeline-date">November 2023</span><a href="{{ '/events/2023-11-26-first-meetup/' | relative_url }}">First meetup</a></li>
    <li><span class="lai-timeline-date">March 2025</span>UPAI Labs Foundation registered; Lucknow AI Labs becomes chapter one</li>
    <li><span class="lai-timeline-date">Today</span>{{ site.data.projects.active | size }} open-source projects and {{ n_papers }} paper reading sessions so far</li>
  </ol>
</div>

## What we do

<p class="lai-lead">Spreading AI knowledge throughout Lucknow, and from here to the rest of Uttar Pradesh.</p>

<ul class="lai-focus-grid">
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🔬</div>
    <h3>AI & ML Research</h3>
    <p>Regular paper reading sessions on recent machine learning research, and research projects of our own.</p>
    <div class="lai-focus-link"><a href="{{ '/research/' | relative_url }}">Research</a></div>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">💻</div>
    <h3>Open Source</h3>
    <p>Community-built projects like NAWAB AI, Loki LLM and the Awadhi language project, open for anyone to contribute.</p>
    <div class="lai-focus-link"><a href="{{ '/projects/' | relative_url }}">Projects</a></div>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🗣️</div>
    <h3>Awadhi NLP & Data</h3>
    <p>Building data and language tools for Awadhi, Hindi and other low-resource Indian languages.</p>
    <div class="lai-focus-link"><a href="{{ '/projects/awadhi-language-project/' | relative_url }}">Awadhi project</a></div>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🚀</div>
    <h3>Startups & Mentorship</h3>
    <p>Mentorship for people building AI startups, and AI applied to everyday problems in our city.</p>
    <div class="lai-focus-link"><a href="{{ '/mentorship/' | relative_url }}">Mentorship</a></div>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🏆</div>
    <h3>Hackathons</h3>
    <p>From 24-hour online sprints to Hack-e-Awadh, our own flagship offline hackathon.</p>
    <div class="lai-focus-link"><a href="{{ '/hackathons/' | relative_url }}">Hackathons</a></div>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">📚</div>
    <h3>Education & Workshops</h3>
    <p>Hands-on meetups and workshops on AI tools and techniques, run with colleges and communities across Uttar Pradesh.</p>
    <div class="lai-focus-link"><a href="{{ '/events/' | relative_url }}">All events</a></div>
  </li>
</ul>

## What we are building

<p class="lai-lead">Open-source projects built by the community. Anyone can pick an issue and contribute.</p>

<ul class="lai-grid lai-grid--3">
{%- for p in site.data.projects.active limit: 6 -%}
  {%- assign first = p.summary | split: ". " | first -%}
  {%- assign last_char = first | slice: -1 -%}
  <li class="lai-card">
    <h4><a href="{{ p.page | relative_url }}">{{ p.name }}</a></h4>
    <p class="lai-muted">{{ first }}{% if last_char != "." %}.{% endif %}</p>
  </li>
{%- endfor %}
</ul>

<p class="lai-more"><a href="{{ '/projects/' | relative_url }}">See all {{ site.data.projects.active | size }} projects</a></p>

## Events

<p class="lai-lead">Meetups, paper reading sessions, workshops and hackathons, run with colleges and communities across the city.</p>

### Next event

{% include lai/upcoming.html limit=1 %}

### Recent events

<ul class="lai-grid lai-grid--3">
{%- for e in recent limit: 3 -%}
  {%- assign href = nil -%}
  {%- if e.recap -%}{%- assign href = e.recap | relative_url -%}{%- elsif e.link -%}{%- assign href = e.link -%}{%- endif -%}
  <li class="lai-card">
    <p class="mb-1">{% include lai/event-type.html type=e.type %}</p>
    <h4>{% if href %}<a href="{{ href }}">{{ e.title }}</a>{% else %}{{ e.title }}{% endif %}</h4>
    <p class="lai-muted">{{ e.date | date: "%-d %B %Y" }}{% if e.note %}. {{ e.note }}{% endif %}</p>
  </li>
{%- endfor %}
</ul>

<p class="lai-more"><a href="{{ '/events/' | relative_url }}">See all {{ n_events }} events</a></p>

<p class="lai-eyebrow">Past sponsors and partners</p>

## Brands that backed our events

<p class="lai-lead">Companies, institutions and communities that sponsored, hosted or partnered with us.</p>

{% include lai/partners.html %}

<p class="lai-note">Across events run, co-hosted or powered by UPAI Labs communities, 2024 to 2026. Listed for reference; no endorsement implied. Want to back an event? <a href="{{ '/contact/' | relative_url }}">Talk to us</a>.</p>

## Part of UPAI Labs

<div class="lai-panel">
  <p>Lucknow AI Labs is the first chapter of <a href="https://upailabs.org">UPAI Labs Foundation</a> (Uttar Pradesh AI Labs), a Section 8 not-for-profit company incorporated in March 2025 to grow the AI ecosystem across Uttar Pradesh. Many of our events are run together with AI Community Lucknow, GDG Lucknow and colleges across the city.</p>
  <div class="lai-actions">
    <a href="{{ '/about/' | relative_url }}" class="btn">More about us</a>
    <a href="https://upailabs.org" class="btn btn-ghost">Visit upailabs.org</a>
  </div>
</div>

## Join the community

<p class="lai-lead">Announcements, discussions and event registrations all happen here.</p>

<ul class="lai-channels">
  <li class="lai-channel">
    <span class="lai-channel-icon lai-channel-icon--whatsapp"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></span>
    <div><a href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH" class="lai-channel-link">WhatsApp</a><p>Announcements and community chat</p></div>
  </li>
  <li class="lai-channel">
    <span class="lai-channel-icon lai-channel-icon--discord"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg></span>
    <div><a href="https://discord.gg/QKw67PDZUm" class="lai-channel-link">Discord</a><p>Technical discussions, projects and paper reading</p></div>
  </li>
  <li class="lai-channel">
    <span class="lai-channel-icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg></span>
    <div><a href="https://www.commudle.com/communities/upai-labs" class="lai-channel-link">Commudle</a><p>Event registrations</p></div>
  </li>
  <li class="lai-channel lai-channel--multi">
    <span class="lai-channel-icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"></path></svg></span>
    <div><span class="lai-channel-title">Follow along</span><p>News, photos and recordings</p>
      <p class="lai-channel-links"><a href="https://www.linkedin.com/company/lucknow-ai-labs/">LinkedIn</a> <a href="https://x.com/AILucknow">X</a> <a href="https://www.instagram.com/lucknow_ai/">Instagram</a> <a href="https://www.youtube.com/@lucknowailabs">YouTube</a></p>
    </div>
  </li>
</ul>

<p class="mt-4">Want to help run events, mentor or build? See <a href="{{ '/get-involved/' | relative_url }}">Get involved</a>.</p>

## Contributors

<p>Thank you to everyone who has contributed to this website and to Lucknow AI Labs on GitHub.</p>

<ul class="lai-contributors">
{%- for contributor in site.github.contributors %}
  <li><a href="{{ contributor.html_url }}" title="{{ contributor.login }}"><img src="{{ contributor.avatar_url }}&amp;s=80" width="40" height="40" alt="{{ contributor.login }}" loading="lazy"></a></li>
{%- endfor %}
</ul>

<p class="lai-coc">Everyone taking part in Lucknow AI Labs follows our <a href="{{ '/code-of-conduct/' | relative_url }}">code of conduct</a>.</p>
