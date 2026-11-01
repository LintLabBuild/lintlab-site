# lintlab.in

The website for **Lint**, a security R&D lab in Gwalior, India. Built with
[Astro](https://astro.build) and deployed to GitHub Pages at <https://lintlab.in>.

## How content works

The site is driven by content files. You don't touch page code to add things.

| To add or change...      | Edit this                                   | Becomes                 |
| ------------------------ | ------------------------------------------- | ----------------------- |
| A product or research    | a new `.md` file in `src/content/work/`     | `/work/<file-name>/`    |
| A service                | a new `.md` file in `src/content/services/` | a section on `/services/` |
| A blog post / write-up   | a new `.md` file in `src/content/posts/`    | `/writing/<file-name>/` + RSS |
| A student certificate    | an entry in `src/data/certificates.json`    | checkable on `/verify/` |
| Email, address, socials  | `src/data/company.json`                     | every page              |

The fields each file needs are listed (and checked at build time) in
[`src/content.config.ts`](src/content.config.ts). Copy an existing file as a template.

### Editing without code

[Pages CMS](https://app.pagescms.org) gives you web forms for all of the above. Sign in
with GitHub, open `LintLabBuild/lintlab-site`, and edit. Saving commits to `main`, and
the site redeploys by itself. The form layout lives in [`.pages.yml`](.pages.yml).

### Certificates

Add one object per certificate to `src/data/certificates.json`:

```json
[
  { "id": "LINT-2026-001", "name": "Student Name", "program": "Lint Lab", "project": "Router firmware reverse engineering", "from": "Nov 2026", "to": "Feb 2027" }
]
```

Print `https://lintlab.in/verify/?id=LINT-2026-001` as a QR code on the certificate.
Only add a student once they agree to be listed.

## Privacy rules for this repo

Never put the phone number, street address, PAN or bank details from the Udyam
certificate on the site or in this repo. The public address is locality, city and PIN only.

## Run it locally

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # outputs to dist/
```

`node scripts/make-images.mjs` regenerates the social share image and icons in `public/`.

## Deploying

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages. Pull requests only run the build.

See [`docs/SEO-AUDIT.md`](docs/SEO-AUDIT.md) for the SEO audit and the follow-ups that
need doing outside the code.
