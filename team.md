---
layout: default
title: Team (AI Baithak)
nav_order: 7
permalink: /team/
description: >-
  Some of the volunteers who run Lucknow AI Labs, in their AI Baithak avatars.
redirect_from:
  - /docs/AI-Baithak/
---

# AI Baithak ke Sadasya

Lucknow AI Labs is run by volunteers. Here are some of them, in their AI Baithak avatars. The community is led by its founding team, Ankit Kumar Pal (Aaditya), Prashant Shukla and Abhishek Sahu; see [About](/about/).

<ul class="lai-team-grid">
{%- for m in site.data.team %}
  <li class="lai-card lai-member">
    <img src="{{ m.image | relative_url }}" alt="{{ m.name }}" class="lai-portrait" width="132" height="132" loading="lazy">
    <h2 class="lai-member-avatar">{{ m.avatar }}</h2>
    <p class="lai-member-name">{{ m.name }}</p>
    <p class="lai-member-links">
      {%- if m.linkedin %}<a class="lai-pill" href="{{ m.linkedin }}">LinkedIn</a>{% endif %}
      {%- if m.github %}<a class="lai-pill" href="{{ m.github }}">GitHub</a>{% endif %}
    </p>
    <p class="lai-member-bio">{{ m.bio[0] }}</p>
    {%- if m.bio.size > 1 %}
    <details class="lai-member-more">
      <summary>Read more</summary>
      {%- for para in m.bio offset: 1 %}
      <p>{{ para }}</p>
      {%- endfor %}
    </details>
    {%- endif %}
  </li>
{%- endfor %}
</ul>

## Ask them anything

Questions about RAG, LLMs, agentic AI, blockchain or ML systems? Ask our members on [Discord](https://discord.gg/QKw67PDZUm). Want to join the team? See [Get involved](/get-involved/).
