# Test Project for @wordpress/eslint-plugin

This project uses custom prettier & eslint configs to override the default line length from 80 characters to 115. This demonstrates the issue in [issue TBD].

If you run `npm run format:js`, no files will be updated, but running `npm run lint:js` flags a formatting error.

This is fixed with PR [PR TBD].
