---
layout: default
parent: Projects
title: NAWAB AI
nav_order: 1
permalink: /projects/nawab-ai/
description: >-
  NAWAB AI, an open-source conversational guide to Lucknow built by the Lucknow
  AI Labs community.
redirect_from:
  - /docs/layout/projects/nawabAI/
---

# NAWAB AI

NAWAB AI is a conversational guide to Lucknow, built in the open by the Lucknow AI Labs community. Ask it about the city and a Gemini-based agent answers using tools such as Google Maps, local news, YouTube and Lucknow Metro fares.

[View the code on GitHub](https://github.com/LucknowAI/nawab){: .btn .btn-primary }

## How it is built

NAWAB AI is a monorepo with two apps that can be deployed separately:

| Part | What it is |
|:--|:--|
| `backend/` | A FastAPI service with PostgreSQL and Redis. Handles Google Sign-In and OTP login, streaming chat, and the agent and its tools. |
| `frontend/` | A Next.js chat interface that talks to the backend. |

Each part has its own setup instructions in its README on GitHub.

## Contribute

NAWAB AI is a good first project if you want to work on a real agent with real users in mind.

1. Read the [README](https://github.com/LucknowAI/nawab) and the contributing guide in the repository.
2. Pick an open issue, or open one describing what you want to add, such as a new city data source or tool.
3. Ask questions in the projects channel on our [Discord](https://discord.gg/QKw67PDZUm).

The code is released under the MIT license.
