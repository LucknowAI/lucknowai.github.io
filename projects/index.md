---
layout: default
title: Projects
nav_order: 5
has_children: true
has_toc: false
permalink: /projects/
description: >-
  Open-source projects built by the Lucknow AI Labs community: NAWAB AI, Loki
  LLM, Lucknow Tech Events, the Awadhi language project and more.
redirect_from:
  - /docs/layout/projects/projects/
  - /docs/layout/projects/final_year_project/
  - /docs/layout/projects/finalYearProjectGenerator/
---

# Projects

Everything we build is open source under [github.com/LucknowAI](https://github.com/LucknowAI). To contribute, pick a project, read its README and open an issue or a pull request. Questions are welcome on our [Discord](https://discord.gg/QKw67PDZUm).

## Active projects

<ul class="lai-grid">
{%- for p in site.data.projects.active %}
  <li class="lai-card">
    <h3>{% if p.page %}<a href="{{ p.page | relative_url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
    <p class="mb-2">{{ p.summary }}</p>
    <p class="lai-card-links mb-1">
      <a href="{{ p.repo }}">Code on GitHub</a>
      {%- if p.extra_repo %} <a href="{{ p.extra_repo }}">{{ p.extra_label }}</a>{% endif %}
      {%- if p.live %} <a href="{{ p.live }}">{{ p.live_label | default: "Live site" }}</a>{% endif %}
    </p>
    <p class="lai-muted fs-2">Last updated {{ p.updated }}</p>
  </li>
{%- endfor %}
</ul>

## Earlier projects

These have had no recent commits. They are still open, and new contributors can pick them up.

<div>
<table>
<thead><tr><th>Project</th><th>What it is</th><th>Last updated</th></tr></thead>
<tbody>
{%- for p in site.data.projects.archived %}
<tr><td><a href="{{ p.repo }}">{{ p.name }}</a></td><td>{{ p.summary }}</td><td>{{ p.updated }}</td></tr>
{%- endfor %}
</tbody>
</table>
</div>

Status as of November 2026. See all repositories on [GitHub](https://github.com/orgs/LucknowAI/repositories).
