# Slides for PyKether

This folder contains slides for my presentation on combining PyScript, Ketcher and RDKit.

## How to use

Install [reveal-md](https://github.com/webpro/reveal-md)

To build slides locally: 

```bash
$ reveal-md slides.md -w \
--scripts https://pyscript.net/snapshots/2023.05.1.RC3/pyscript.js \
--template assets/revealjs/reveal_template.html \
--css assets/style.css \
--highlight-theme a11y-light
```

To export slides to static page: 

```bash
reveal-md slides.md -w \
--scripts https://pyscript.net/snapshots/2023.05.1.RC3/pyscript.js \
--template assets/revealjs/reveal_template.html \
--css assets/style.css \
--highlight-theme a11y-light \
--static-dirs assets/ \
--static slides
```

There is one hiccup static pages though. You need to manually change path to `styles.css` file in `slides/index.html` 
