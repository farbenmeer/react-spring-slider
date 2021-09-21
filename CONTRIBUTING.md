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

We have npm scripts which are the source for every build step or anything similar 
like building the distribution file, creating the storybook files, starting the 
storybook server, linting and so on.

The targets meant to be used are:

| Target        | Description   |
| ------------- |:--------------|
| `build`      | builds all distribution files |
| `build-storybook` | builds the storybook files to the `docs` folder |
| `storybook` | starts the storybook development server on port 6006 |
| `lint` | runs `eslint` with plugins |
| `lint-fix` | runs the automatic fixer of `eslint` |
| `clean` | cleans all generated files i.e. `node_modules` and `dist` |

You can see all targets which meant to be used from the developer in the `package.json` under the `script` section.
If you encounter any problem try to run `npm run clean` at first.

## Releasing

Each push to the `main` branch will build a new version. [semantic-release](https://github.com/semantic-release/semantic-release) creates a changelog, increases the version number, creates a git tag, a github release and deploys it to npm.

### pre-release
To create a pre-release just push changes to the `beta` branch. This will deploy a beta version (e.g. `1.2.5-beta1`) and publish it as a pre-release on npm.
