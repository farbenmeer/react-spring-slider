JS_SOURCES=$(wildcard src/*.js src/**/*.js src/**/**/*.js)
CSS_SOURCES=$(wildcard src/*.css src/**/*.css src/**/**/*.css)

ec = ./node_modules/.bin/ec
xo = ./node_modules/.bin/xo
babel = ./node_modules/.bin/babel
build-storybook = ./node_modules/.bin/build-storybook
start-storybook = ./node_modules/.bin/start-storybook

.DEFAULT_GOAL := help

#
# Surface targets
#

# help make install: installs node_modules
install: node_modules

# help make build: builds the distribution files
build: install dist

# help make storybook: builds the storybook files
storybook: install docs

# help make start: starts the storybook server on port 6006
.PHONY: start
start: install
start:
	$(start-storybook) -p 6006

# help make lint run xo and editorconfig-checker
.PHONY: lint
lint: lint-xo lint-editorconfig

# help make lint-editorconfig: runs the editorconfig-checker
lint-editorconfig:
	$(ec)

# help make lint-xo: runs the xo linter
lint-xo:
	$(xo) --prettier $$PWD/src/**/*

# help make lint-fix: runs the automatic fixer of xo
lint-fix:
	$(xo) --prettier --fix $$PWD/src/**/*

# Runs the help message
help:
	@cat Makefile | grep '# help' | sed 's/# help //' | head -n -1


################################################################################


#
# Internal targets
#

node_modules: package.json package-lock.json
node_modules:
	npm install
	touch node_modules

ci:
	npm ci

dist: $(JS_SOURCES) $(CSS_SOURCES)
dist:
	$(babel) src -d dist
	cp src/index.css dist/ && cp src/components/bullet/bullet.css dist/components/bullet/
	touch dist

docs: $(JS_SOURCES) $(CSS_SOURCES)
docs:
	$(build-storybook) --output-dir docs
	touch docs

.PHONY: clean
clean:
	rm -rf dist node_modules
