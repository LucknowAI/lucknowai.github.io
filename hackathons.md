---
layout: default
title: Hackathons
nav_order: 4
permalink: /hackathons/
description: >-
  Hackathons run or co-run by Lucknow AI Labs, from Hack to Crack 1.0 in 2024
  to Hack-e-Awadh in 2026.
---

# Hackathons

Hackathons are where our members turn what they learn at meetups and study jams into working projects. Here are the ones we have run or co-run.

{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign hacks = "" | split: "" -%}
{%- for e in site.data.events -%}
  {%- if e.type == "hackathon" and e.status != "unconfirmed" -%}
    {%- assign hacks = hacks | push: e -%}
  {%- endif -%}
{%- endfor -%}
{%- assign hacks = hacks | reverse %}

<ul class="lai-grid">
{%- for e in hacks -%}
  {%- assign href = nil -%}
  {%- if e.recap -%}{%- assign href = e.recap | relative_url -%}{%- elsif e.link -%}{%- assign href = e.link -%}{%- endif -%}
  <li class="lai-card"{% if e.date >= today %} data-event-date="{{ e.date }}"{% endif %}>
    <p class="mb-1">{% if e.date >= today %}<span class="label label-yellow">Upcoming</span>{% endif %}{% if e.format %}<span class="label label-blue">{{ e.format | capitalize }}</span>{% endif %}</p>
    <h3>{% if href %}<a href="{{ href }}">{{ e.title }}</a>{% else %}{{ e.title }}{% endif %}</h3>
    <p class="mb-1"><strong>{{ e.date | date: "%-d %B %Y" }}</strong>{% if e.venue %} &middot; {{ e.venue }}{% endif %}</p>
    {%- if e.note %}<p class="mb-1">{{ e.note }}</p>{% endif %}
    <p class="lai-muted">{{ e.organisers }}</p>
  </li>
{%- endfor %}
</ul>

## Hack-e-Awadh

Hack-e-Awadh is Lucknow AI Labs' own offline hackathon. The 2026 edition, on 26 September, received about 120 submissions, and 20 teams reached the finals. Since then, finalist teams have been sharing their ideas on social media, and Lucknow AI Labs has been posting reflections on each one.

## Want to take part, mentor or sponsor?

- **Take part:** hackathons are announced on [Commudle](https://www.commudle.com/communities/upai-labs/hackathons) and in our [community groups](/contact/).
- **Mentor or judge:** see [Get involved](/get-involved/).
- **Sponsor or host a hackathon:** write to [hello@upailabs.org](mailto:hello@upailabs.org).
