# Makefile
install:
    npm ci

brain-games:
    node bin/brain-games.js

publish:
    npm publish brain-games --dry-run

lint:
	npx eslint .
