# Local preview of the site with the same gems GitHub Pages uses.
# Usage: docker compose up   then open http://localhost:4000
FROM ruby:3.3

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

# Gems are installed outside the mounted site folder so the mount cannot hide them.
WORKDIR /gems
COPY Gemfile ./
ENV BUNDLE_GEMFILE=/gems/Gemfile
RUN bundle install

WORKDIR /site
EXPOSE 4000 35729
