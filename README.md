# Lucknow AI Labs website

Source of [lucknowai.github.io](https://lucknowai.github.io), the website of Lucknow AI Labs, Chapter 1 of [UPAI Labs](https://upailabs.org).

It is a [Jekyll](https://jekyllrb.com/) site using the [Just the Docs](https://github.com/just-the-docs/just-the-docs) theme (version 0.6.2; its files are in `_layouts`, `_includes` and `_sass`). GitHub Pages builds and publishes it automatically from the `main` branch.

## Run it on your computer

### Option 1: Docker (easiest)

Needs [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
docker compose up
```

Open <http://localhost:4000>. Pages rebuild and the browser reloads when you save a file. The first run downloads the gems and takes a few minutes. Stop with `Ctrl+C`.

### Option 2: Ruby

Needs Ruby 3.x. On macOS the built-in Ruby is too old, so install one with Homebrew:

```bash
brew install ruby
# Apple Silicon Macs:
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
# Intel Macs:
# echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Then, in this folder:

```bash
bundle config set --local path vendor/bundle   # keep gems inside the project
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>.

Both options use the `github-pages` gem, so you get the same Jekyll version and plugins as the live site.

## Where things are

| Path | What it is |
|:--|:--|
| `index.md` | Home page |
| `about.md`, `research.md`, `team.md`, `hackathons.md`, `faqs.md`, `contact.md` | Main pages |
| `get-involved.md`, `volunteer.md`, `mentorship.md` | Get involved section |
| `events/index.md` | Events page (generated from `_data/events.yml`) |
| `events/YYYY-MM-DD-name.md` | Recap pages for individual events |
| `projects/index.md` | Projects page (generated from `_data/projects.yml`) |
| `_data/events.yml` | **Every event, in one list** |
| `_data/projects.yml` | Open-source projects |
| `_includes/lai/` | Small templates for event cards and labels |
| `_sass/custom/custom.scss`, `_sass/color_schemes/lai.scss` | Site styles and colours |
| `_config.yml` | Site settings, menu links and footer |

## Adding an event

1. Open `_data/events.yml` and add an entry in date order:

   ```yaml
   - date: "2026-12-12"
     title: AI Study Jam, session 5
     type: study-jam          # meetup | workshop | talk | summit | hackathon | paper-reading | study-jam | ama
     format: offline         # offline | online | hybrid
     venue: SRMCEM, Lucknow
     organisers: Lucknow AI Labs, with AI Community Lucknow
     link: https://www.commudle.com/communities/upai-labs/events
   ```

   The Home, Events and Hackathons pages pick it up automatically. Upcoming events show on the Home page until their date passes.

2. Optional, after the event: add a recap page at `events/2026-12-12-study-jam-5.md`:

   ```markdown
   ---
   layout: default
   title: "AI Study Jam, session 5 (Dec 2026)"
   parent: Events
   nav_order: -20261212      # minus the date, so the newest events come first in the menu
   permalink: /events/2026-12-12-study-jam-5/
   description: "AI Study Jam session 5 at SRMCEM, 12 December 2026."
   ---

   # AI Study Jam, session 5

   What happened, who spoke, photos and slides.
   ```

   Then add `recap: /events/2026-12-12-study-jam-5/` to the event in `_data/events.yml`.

Please write a recap within a week of each event, while the details are fresh.

## Adding or updating a project

Edit `_data/projects.yml`. Projects with commits in the last 12 months go under `active`; older ones under `archived`.

## Old links

Pages moved to shorter addresses in November 2026. Each page lists its old address under `redirect_from`, so links shared before then still work.

## Checks

Every pull request runs [Site check](.github/workflows/site-check.yml): it builds the site with the GitHub Pages gems and checks every internal link and image. Please make sure it passes before merging.

## Contributing

Open an issue or a pull request. Everyone taking part follows our [code of conduct](https://lucknowai.github.io/code-of-conduct/). Questions: [hello@upailabs.org](mailto:hello@upailabs.org).
