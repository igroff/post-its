.PHONY: build

build:
	npm run build
	cat build/static/js/main.*.js | iconv -f utf-8 -t ascii//translit --unicode-subst 'pppp' > crx/main.js
