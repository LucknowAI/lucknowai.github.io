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
---

# Projects

Everything we build is open source under [github.com/LucknowAI](https://github.com/LucknowAI). To contribute, pick a project, read its README and open an issue or a pull request. Questions are welcome on our [Discord](https://discord.gg/QKw67PDZUm).

## Active projects

{% assign now = site.time | date: "%s" | plus: 0 %}
<ul class="lai-grid lai-project-grid">
{%- for p in site.data.projects.active %}
  {%- assign upd = "1 " | append: p.updated | date: "%s" | plus: 0 -%}
  {%- assign age = now | minus: upd -%}
  <li class="lai-card lai-project-card">
    {%- if p.tags %}
    <p class="lai-project-tags">{% for t in p.tags %}<span class="label">{{ t }}</span>{% endfor %}</p>
    {%- endif %}
    <h3>{% if p.page %}<a href="{{ p.page | relative_url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</h3>
    <p class="lai-project-summary">{{ p.summary }}</p>
    <div class="lai-project-foot">
      <span class="lai-updated{% if age < 15768000 %} is-fresh{% endif %}">{% if age < 15768000 %}Active · {% endif %}{{ p.updated }}</span>
      <span class="lai-pills">
        <a class="lai-pill" href="{{ p.repo }}">GitHub</a>
        {%- if p.live %}<a class="lai-pill" href="{{ p.live }}">Website</a>{% endif %}
        {%- if p.extra_repo %}<a class="lai-pill" href="{{ p.extra_repo }}">{{ p.extra_short | default: p.extra_label }}</a>{% endif %}
      </span>
    </div>
  </li>
{%- endfor %}
</ul>

## Earlier projects

These have had no recent commits. They are still open, and new contributors can pick them up.

<div class="lai-archive">
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
