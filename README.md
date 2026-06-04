# TrailFinder Tutoring — website

Static website for [trailfindertutoring.com](https://trailfindertutoring.com), hosted on GitHub Pages. Plain HTML and CSS, no build step.

## Editing the site

Every page is a plain `.html` file. To change copy, open the file and edit the text directly.

| Page | File |
|------|------|
| Home | `index.html` |
| Project Mentorship | `project-mentorship/index.html` |
| Math | `math/index.html` |
| Mandarin Chinese | `mandarin-chinese/index.html` |
| FAQs | `faqs/index.html` |
| Philosophy | `philosophy/index.html` |
| Contact | `contact/index.html` |

Shared styles live in `styles.css`. Images live in `images/`.

### Adding a new testimonial
Open `index.html`, find the `<!-- Testimonials -->` section, and copy one
`<blockquote class="quote">...</blockquote>` block. Paste it in and change the
quote and attribution.

## Preview locally
From this folder, run a simple static server:

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Contact form
The form on `contact/index.html` posts to [Formspree](https://formspree.io).
Replace `YOUR_FORM_ID` in that file with the ID from the Formspree dashboard.

## Deployment
Pushing to the `main` branch publishes automatically via GitHub Pages.
The custom domain is configured in the `CNAME` file.
