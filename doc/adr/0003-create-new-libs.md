# 3. Create new libs

Date: 2025-01-22


## Context

It's always impossible to remember this crap.

## Decision

### Is react involved?

```
nx g @nx/react:library module-projects-ui --directory libs/module-projects-ui --bundler none --tags scope:ui
nx g @nx/react:setup-tailwind --project=module-projects-ui
```

Then add the preset…

### Pure JS?

```
nx g @nx/js:library module-projects-core --directory libs/module-projects-core --bundler none --tags scope:core
```


## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
