# 2. how tailwind is set up

Date: 2025-01-22

## Context

It was a nightmare getting all this working together.

## Decision

I've set up a lib called `shared-design-system`. It contains:

- A Tailwind `preset`
- `globals.css`
- Shadcn/ui components

The tailwind preset and globals.css need to be referred to in the tailwind configuration of each `app`.

## Gotchas

### Tailwind + Vite

This wasn't happy. I had to create a postcss.config file with the `.cjs` extension and reference the tailwind.config with `.ts`. No other combination worked for me.

### We can't use the shadcn CLI

It allow accepts import paths in `components.json`. If you put paths in, it breaks everything.

This means you have to install components manually.
