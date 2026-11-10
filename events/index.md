---
layout: default
title: Events
nav_order: 3
has_children: true
has_toc: false
permalink: /events/
description: >-
  Upcoming and past Lucknow AI Labs events: meetups, workshops, study jams,
  paper reading sessions, summits and hackathons since November 2023.
redirect_from:
  - "/docs/layout/Events & Meetups/layout/"
  - "/docs/layout/Events & Meetups/27-Apr-2024 GDSC WOW/"
  - /docs/layout/readme/
---

# Events

We run meetups, workshops, study jams, paper reading sessions, summits and hackathons in Lucknow, often together with AI Community Lucknow (earlier TFUG Lucknow), GDG Lucknow and colleges across the city. Registrations open on [Commudle](https://www.commudle.com/communities/upai-labs/events).

## Upcoming

{% include lai/upcoming.html %}

## Past events

<div class="lai-events-by-year">
{%- assign today = site.time | date: "%Y-%m-%d" -%}
{%- assign past = "" | split: "" -%}
{%- for e in site.data.events -%}
  {%- if e.status != "unconfirmed" and e.date < today -%}
    {%- assign past = past | push: e -%}
  {%- endif -%}
{%- endfor -%}
{%- assign past = past | reverse %}
<p>{{ past | size }} events since November 2023. &ldquo;Organised by&rdquo; shows the host named on the event page or on Commudle.</p>
{%- assign current_year = "" -%}
{%- for e in past -%}
  {%- assign year = e.date | slice: 0, 4 -%}
  {%- if year != current_year -%}
    {%- unless current_year == "" %}
</tbody></table>
    {%- endunless %}
<h3 id="year-{{ year }}">{{ year }}</h3>
<table class="lai-events">
<thead><tr><th>Date</th><th>Event</th><th>Organised by</th></tr></thead>
<tbody>
    {%- assign current_year = year -%}
  {%- endif -%}
  {%- assign href = nil -%}
  {%- if e.recap -%}{%- assign href = e.recap | relative_url -%}{%- elsif e.link -%}{%- assign href = e.link -%}{%- endif %}
<tr>
<td>{{ e.date | date: "%-d %b" }}</td>
<td>{% if href %}<a href="{{ href }}">{{ e.title }}</a>{% else %}{{ e.title }}{% endif %} {% include lai/event-type.html type=e.type %}{% if e.venue %}<br><span class="lai-muted">{{ e.venue }}</span>{% endif %}{% if e.note %}<br><span class="lai-muted">{{ e.note }}</span>{% endif %}</td>
<td>{{ e.organisers }}</td>
</tr>
{%- endfor %}
{% if past.size > 0 %}</tbody></table>{% endif %}
</div>

Links on events without a recap page go to the organiser's event listing.

{: .note }
Ran an event with us that is missing here? Add it to [`_data/events.yml`](https://github.com/LucknowAI/lucknowai.github.io/blob/main/_data/events.yml) on GitHub, or tell us at [hello@upailabs.org](mailto:hello@upailabs.org).
