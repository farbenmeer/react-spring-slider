TS_SOURCES=$(wildcard src/*.tsx src/*.ts src/**/*.tsx src/**/*.ts src/**/**/*.tsx src/**/**/*.ts)

GIT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
GIT_BRANCH_UP_TO_DATE = $(shell git remote show origin | tail -n1 | sed 's/.*(\(.*\))/\1/')
CURRENT_VERSION = $(shell grep 'version' package.json | sed 's/.*".*": "\(.*\)",/\1/')

ec = ./node_modules/.bin/ec
xo = ./node_modules/.bin/xo
build-storybook = ./node_modules/.bin/build-storybook
start-storybook = ./node_modules/.bin/start-storybook
tsc = ./node_modules/.bin/tsc
semantic-release = ./node_modules/.bin/semantic-release

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
lint-editorconfig: install
	$(ec)

# help make lint-xo: runs the xo linter
lint-xo: install
	$(xo) --prettier $$PWD/src/**/*

# help make lint-fix: runs the automatic fixer of xo
lint-fix:
	$(xo) --prettier --fix $$PWD/src/**/*

# help make release: generates the newest version
release:
	$(semantic-release)

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

dist: $(TS_SOURCES) tsconfig.json package.json
dist:
	$(tsc) --build tsconfig.json
	touch dist

docs: $(TS_SOURCES)
docs:
	rm -rf docs
	$(build-storybook) --output-dir docs
	touch docs

.PHONY: clean
clean:
	rm -rf dist node_modules

