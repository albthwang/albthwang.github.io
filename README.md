# alberthwang.me — personal site

Albert Hwang's personal site, hosted on GitHub Pages from this user repo
(`albthwang.github.io`). Plain HTML and CSS, no build step.

> Migrated off Squarespace. The earlier TrailFinder Tutoring static rebuild
> that used to live in this repo is preserved (with history) in the private
> `trailfinder-site` repo. The live TrailFinder site stays on Squarespace.

## Editing

Every page is a plain `.html` file — open it and edit the text directly.

| Page    | File                 |
|---------|----------------------|
| Home    | `index.html`         |
| About   | `about/index.html`   |
| Contact | `contact/index.html` |

Shared styles live in `styles.css`; tiny JS in `main.js`; images in `images/`.

## Contact form

The contact form posts to [Formspree](https://formspree.io) (free) at endpoint
`xbdegvdr` (see `contact/index.html`). No backend runs on GitHub Pages.

## Custom domain

`alberthwang.me` is served via a `CNAME` file + the repo's Pages settings.
DNS (apex A records → GitHub Pages; `www` CNAME → `albthwang.github.io`).
