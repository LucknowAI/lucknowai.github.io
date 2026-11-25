---
layout: default
title: Research
nav_order: 6
permalink: /research/
description: >-
  Research at Lucknow AI Labs: paper reading sessions, the Awadhi language
  project and our work towards a first publication.
redirect_from:
  - /docs/ui-components
---

# Research

We want Lucknow to produce AI research, not only use it. That starts with reading papers together and grows into our own work on problems that matter in Uttar Pradesh.

{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign n_papers = 0 -%}
{%- for e in site.data.events -%}
  {%- if e.type contains "paper-reading" and e.status != "unconfirmed" and e.date < today -%}
    {%- assign n_papers = n_papers | plus: 1 -%}
  {%- endif -%}
{%- endfor %}

<ul class="lai-stats lai-stats--3" aria-label="Research in numbers">
  <li><span class="lai-stat-number">{{ n_papers }}</span><span class="lai-stat-label">paper reading sessions held</span></li>
  <li><span class="lai-stat-number">38M</span><span class="lai-stat-label">Awadhi speakers we build for</span></li>
  <li><span class="lai-stat-number">3</span><span class="lai-stat-label">research areas</span></li>
</ul>

## Paper reading

In our paper reading sessions, members read a recent machine learning paper and discuss it together. We have held {{ n_papers }} paper reading sessions since October 2024, most of them with AI Community Lucknow. Sessions are announced on [Commudle](https://www.commudle.com/communities/upai-labs/events) and discussed on our [Discord](https://discord.gg/QKw67PDZUm).

## The Awadhi language project

Awadhi has about 38 million speakers, but it is a low-resource language: there is little data or software for it. We are collecting Awadhi text and speech, and working on speech-to-text for the language.

- **Help build the dataset:** if you speak Awadhi, record a few sentences on the [Awadhi website](https://awadhi-language.vercel.app/).
- **Code:** [Awadhi website](https://github.com/LucknowAI/Awadhi) and [Awadhi speech-to-text](https://github.com/LucknowAI/Awadhi-STT) on GitHub.
- **Related resources:** our curated [list of resources for low-resource Indian languages](https://github.com/LucknowAI/Awesome-Low-Resource-Indian-Languages-Hub), covering Awadhi, Bhojpuri, Braj and Magahi.

## Areas we work on

<ul class="lai-focus-grid lai-area-grid">
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🗣️</div>
    <h3>Low-resource Indian languages</h3>
    <p>Data and speech tools for languages with little software, starting with Awadhi.</p>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">📄</div>
    <h3>Document and image understanding</h3>
    <p>Reading documents and images from Indian contexts.</p>
  </li>
  <li class="lai-focus-card">
    <div class="lai-focus-icon" aria-hidden="true">🤖</div>
    <h3>Applied AI agents</h3>
    <p>Agents that use real tools for real users, such as NAWAB AI.</p>
    <div class="lai-focus-link"><a href="{{ '/projects/nawab-ai/' | relative_url }}">NAWAB AI</a></div>
  </li>
</ul>

## Towards our first publication

We are working towards our first research paper. It will be listed here once it is published.
{: .highlight }

## Get involved

Want to present a paper, join the Awadhi work or start a research project with us? Say hello on [Discord](https://discord.gg/QKw67PDZUm) or write to [hello@upailabs.org](mailto:hello@upailabs.org). For the wider research programme across UPAI Labs, see [upailabs.org](https://upailabs.org).
