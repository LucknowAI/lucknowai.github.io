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
    {%- if e.type == "hackathon" -%}{%- assign n_hackathons = n_hackathons | plus: 1 -%}{%- endif -%}
    {%- if e.type == "paper-reading" -%}{%- assign n_papers = n_papers | plus: 1 -%}{%- endif -%}
  {%- endif -%}
{%- endfor -%}
{%- assign recent = past | reverse -%}

<div class="lai-hero">
  <p class="lai-kicker mb-1">Chapter 1 of UPAI Labs</p>
  <h1 class="fs-9 mb-2">Lucknow AI Labs</h1>
  <p class="fs-6 fw-300">A volunteer-run community where students and engineers in Lucknow learn, build and research AI together. Since November 2023.</p>
  <a href="{{ '/events/' | relative_url }}" class="btn btn-primary fs-5">Upcoming events</a>
  <a href="#join-the-community" class="btn fs-5">Join the community</a>
  <a href="https://github.com/LucknowAI" class="btn fs-5">Contribute on GitHub</a>
</div>

## Next event

{% include lai/upcoming.html limit=1 %}

## What we do

<ul class="lai-grid">
  <li class="lai-card">
    <h3>Meetups and workshops</h3>
    <p>Hands-on sessions on AI tools and techniques, often run with colleges and other Lucknow communities.</p>
    <p class="mt-2"><a href="{{ '/events/' | relative_url }}">All events</a></p>
  </li>
  <li class="lai-card">
    <h3>Hackathons</h3>
    <p>From 24-hour online sprints to Hack-e-Awadh, our own offline hackathon.</p>
    <p class="mt-2"><a href="{{ '/hackathons/' | relative_url }}">Hackathons</a></p>
  </li>
  <li class="lai-card">
    <h3>Paper reading</h3>
    <p>Regular sessions where members read and discuss recent machine learning research.</p>
    <p class="mt-2"><a href="{{ '/research/' | relative_url }}">Research</a></p>
  </li>
  <li class="lai-card">
    <h3>Open source</h3>
    <p>Community-built projects such as NAWAB AI, Loki LLM and the Awadhi language project.</p>
    <p class="mt-2"><a href="{{ '/projects/' | relative_url }}">Projects</a></p>
  </li>
</ul>

## By the numbers

<ul class="lai-grid lai-stats">
  <li class="lai-card"><span class="lai-stat-number">{{ n_events }}</span><span class="lai-stat-label">events since November 2023</span></li>
  <li class="lai-card"><span class="lai-stat-number">{{ n_hackathons }}</span><span class="lai-stat-label">hackathons</span></li>
  <li class="lai-card"><span class="lai-stat-number">{{ n_papers }}</span><span class="lai-stat-label">paper reading sessions</span></li>
  <li class="lai-card"><span class="lai-stat-number">{{ site.data.projects.active | size }}</span><span class="lai-stat-label">active open-source projects</span></li>
</ul>

<p class="lai-muted fs-2">Counted from our <a href="{{ '/events/' | relative_url }}">events list</a>, which includes events run with AI Community Lucknow and other partner communities.</p>

## Recent events

<ul class="lai-grid">
{%- for e in recent limit: 4 -%}
  {%- assign href = nil -%}
  {%- if e.recap -%}{%- assign href = e.recap | relative_url -%}{%- elsif e.link -%}{%- assign href = e.link -%}{%- endif -%}
  <li class="lai-card">
    <p class="mb-1">{% include lai/event-type.html type=e.type %}</p>
    <h4>{% if href %}<a href="{{ href }}">{{ e.title }}</a>{% else %}{{ e.title }}{% endif %}</h4>
    <p class="lai-muted">{{ e.date | date: "%-d %B %Y" }}{% if e.note %}. {{ e.note }}{% endif %}</p>
  </li>
{%- endfor %}
</ul>

## Part of UPAI Labs

Lucknow AI Labs is the first chapter of [UPAI Labs Foundation](https://upailabs.org) (Uttar Pradesh AI Labs), a Section 8 not-for-profit company incorporated in March 2025 to grow the AI ecosystem across Uttar Pradesh. Many of our events are run together with AI Community Lucknow, GDG Lucknow and colleges across the city. [More about us](about/).

## Join the community

| Where | What happens there |
|:--|:--|
| [WhatsApp](https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH) | Announcements and community chat |
| [Discord](https://discord.gg/QKw67PDZUm) | Technical discussions, projects and paper reading |
| [Commudle](https://www.commudle.com/communities/upai-labs) | Event registrations |
| [LinkedIn](https://www.linkedin.com/company/lucknow-ai-labs/), [X](https://x.com/AILucknow), [Instagram](https://www.instagram.com/lucknow_ai/), [YouTube](https://www.youtube.com/@lucknowailabs) | News, photos and recordings |

Want to help run events, mentor or build? See [Get involved](get-involved/).

## Contributors

Thank you to everyone who has contributed to this website and to Lucknow AI Labs on GitHub.

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
    <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}" loading="lazy"></a>
  </li>
{% endfor %}
</ul>

Everyone taking part in Lucknow AI Labs follows our [code of conduct](code-of-conduct/).
