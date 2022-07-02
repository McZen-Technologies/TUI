# TUI.js (Tunisia’s Unique Identifier)

[![NPM Downloads](https://badgen.net/npm/dt/@mczen-technologies/tui)](https://www.npmjs.com/package/@mczen-technologies/tui) [![](https://data.jsdelivr.com/v1/package/npm/@mczen-technologies/tui/badge)](https://www.jsdelivr.com/package/npm/@mczen-technologies/tui)

The unique identifier serves as the taxpayer's identifier to the tax authorities in Tunisia, it's composed of 7 digits with a control key, for more details check out [trovit.tn](https://trovit.tn)

## Usage in the browser

```html
<script src="https://cdn.jsdelivr.net/npm/@mczen-technologies/tui"></script>
<script>
	new TUI("0789012H").isValid(); // true
</script>
```

## Or as a module

```html
<script type="module">
	import TUI from 'https://cdn.jsdelivr.net/npm/@mczen-technologies/tui/module.js/+esm';
	console.log(new TUI("0789012H").isValid())
</script>
```
