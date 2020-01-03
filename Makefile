JS_SOURCES=$(wildcard src/*.js src/**/*.js src/**/**/*.js)
CSS_SOURCES=$(wildcard src/*.css src/**/*.css src/**/**/*.css)

GIT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
GIT_BRANCH_UP_TO_DATE = $(shell git remote show origin | tail -n1 | sed 's/.*(\(.*\))/\1/')
CURRENT_VERSION = $(shell grep 'version' package.json | sed 's/.*".*": "\(.*\)",/\1/')

ec = ./node_modules/.bin/ec
xo = ./node_modules/.bin/xo
babel = ./node_modules/.bin/babel
build-storybook = ./node_modules/.bin/build-storybook
start-storybook = ./node_modules/.bin/start-storybook
standard-version = ./node_modules/.bin/standard-version

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

# help make release: releases the newest version
release: _is_master_branch _git_branch_is_up_to_date _current_version _do_release
release:
	@echo Release done. Go to Github and create a release.

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

dist: $(JS_SOURCES) $(CSS_SOURCES)
dist:
	$(babel) src -d dist
	cp src/index.css dist/
	cp src/components/bullet/bullet.css dist/components/bullet/
	cp src/components/arrow/arrow.css dist/components/arrow/
	touch dist

docs: $(JS_SOURCES) $(CSS_SOURCES)
docs:
	$(build-storybook) --output-dir docs
	touch docs

.PHONY: clean
clean:
	rm -rf dist node_modules

_is_master_branch:
ifneq ($(GIT_BRANCH),master)
	@echo You are not on the master branch.
	@echo Please check out the master and try to release again
	@false
endif

_git_branch_is_up_to_date:
ifneq ($(GIT_BRANCH_UP_TO_DATE),up to date)
	@echo Your master branch is not up to date.
	@echo Please push your changes or pull changes from the remote.
	@false
endif

_current_version:
	@echo the current version is: $(CURRENT_VERSION)

_do_release:
	@read -p "Enter version to release: " version && \
	sed -i "s/\"version\":.*\",/\"version\": \"$${version}\",/" ./package.json && \
	make clean && \
	make install && \
	make lint && \
	make build && \
	make storybook && \
	git add . && \
	git commit -m "chore(release): release $${version}" --no-verify && \
	git tag "$${version}" && \
	npm publish && \
	git push origin master && \
	git push origin master --tags
