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
  {%- if e.type == "paper-reading" and e.status != "unconfirmed" and e.date < today -%}
    {%- assign n_papers = n_papers | plus: 1 -%}
  {%- endif -%}
{%- endfor %}

## Paper reading

In our paper reading sessions, members read a recent machine learning paper and discuss it together. We have held {{ n_papers }} paper reading sessions since October 2024, most of them with AI Community Lucknow. Sessions are announced on [Commudle](https://www.commudle.com/communities/upai-labs/events) and discussed on our [Discord](https://discord.gg/QKw67PDZUm).

## The Awadhi language project

Awadhi has about 38 million speakers, but it is a low-resource language: there is little data or software for it. We are collecting Awadhi text and speech, and working on speech-to-text for the language.

- **Help build the dataset:** if you speak Awadhi, record a few sentences on the [Awadhi website](https://awadhi-language.vercel.app/).
- **Code:** [Awadhi website](https://github.com/LucknowAI/Awadhi) and [Awadhi speech-to-text](https://github.com/LucknowAI/Awadhi-STT) on GitHub.
- **Related resources:** our curated [list of resources for low-resource Indian languages](https://github.com/LucknowAI/Awesome-Low-Resource-Indian-Languages-Hub), covering Awadhi, Bhojpuri, Braj and Magahi.

## Areas we work on

- Low-resource Indian languages, starting with Awadhi
- Document and image understanding for Indian contexts
- Applied AI agents, such as [NAWAB AI](/projects/nawab-ai/)

## Towards our first publication

We are working towards our first research paper. It will be listed here once it is published.

## Get involved

Want to present a paper, join the Awadhi work or start a research project with us? Say hello on [Discord](https://discord.gg/QKw67PDZUm) or write to [hello@upailabs.org](mailto:hello@upailabs.org). For the wider research programme across UPAI Labs, see [upailabs.org](https://upailabs.org).
