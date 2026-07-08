# DIICSA static mirror

This repository is connected to `https://github.com/o7digital/diicsacv.git`.

The site content is a static mirror of `https://diicsacv.com/`, generated from the public WordPress sitemap on 2026-07-08.

## Structure

- `index.html` redirects to the mirrored site.
- `diicsacv.com/` contains the downloaded HTML pages and WordPress assets.
- `cdn-cookieyes.com/`, `fonts.googleapis.com/`, `fonts.gstatic.com/`, and `www.googletagmanager.com/` contain external assets captured by the static mirror process.

## Local preview

Run:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

This is a static clone only. WordPress admin, server-side forms, comments, and dynamic plugin APIs are not included.
