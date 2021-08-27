# TUI.js (Tunisia’s Unique Identifier)

[![Node.js Package](https://github.com/McZen-Technologies/TUI/actions/workflows/release-package.yml/badge.svg)](https://github.com/McZen-Technologies/TUI/actions/workflows/release-package.yml) [![](https://data.jsdelivr.com/v1/package/npm/@mczentechnologies/tui/badge)](https://www.jsdelivr.com/package/npm/@mczentechnologies/tui)

The unique identifier serves as the taxpayer's identifier to the tax authorities in Tunisia, it's composed of 7 digits with a control key, for more details check out [trovit.tn](https://trovit.tn)

## Usage in the browser

```html
<script src="https://cdn.jsdelivr.net/npm/@mczentechnologies/tui@1.0.0"></script>
<script>
  new TUI("0789012H").isValid(); // true
</script>
```
