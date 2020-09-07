# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

## Pull Request Process

1. Make sure your idea is put into an issue first.
2. Make sure to start your work from the latest main or rebase if needed.
3. Make sure to have the latest dependencies installed via `npm install`.
4. Do your changes and write clear commit messages following our conventions (see previous commits or `commitlint.config.js`).
5. Test your changes and make sure `npm run lint` passes with no errors. ;)
6. Update the `CHANGELOG.md` according to your change.	
7. Update the `README.md` if needed.
8. Push your changes and submit a pull request and mention the issue inside the pull request body.

## Issue Process

When Opening an issue please keep in mind that we might not be able to support 
every feature request as we tend to make this project as easy to use and 
flexible as possible.

Please provide as much detail to your issues as possible.
If some parts of the templates doesn't fit to your issue simply delete it.

## Build process

We have a Makefile which is the source for every build step or anything similar 
like building the distribution file, creating the storybook files, starting the 
storybook server, linting and so on.

There are some targets which are designed to be user surfacing as well as some 
targets which are for internal usage - to make the API clear and descriptive to 
the developer.

The targets meant to be used are:

| Target        | Description   |
| ------------- |:--------------|
| `install`      | installs the `node_modules` |
| `build`      | builds all distribution files |
| `storybook` | builds the storybook files to the `docs` folder |
| `start` | starts the storybook development server on port 6006 |
| `lint` | runs `lint-xo` and `lint-editorconfig` |
| `lint-xo` | runs the `xo` linter |
| `lint-editorconfig` | runs the `editorconfig-checker` |
| `lint-fix` | runs the automatic fixer of `xo` |
| `clean` | cleans all generated files i.e. `node_modules` and `dist` |

You can see all targets which meant to be used from the developer by simply 
typing `make help` or, a bit easier `make` into your terminal.
If you encounter any problem try to run `make clean` at first.

## Releasing

In order to release make sure to be on the `main` branch and have the latest 
changes. Make also sure to be logged in into your npm-account.

`make release` should do everything needed in order to build a complete release 
including publishing it to npm and creating a Github tag.
