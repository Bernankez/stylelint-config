# @bernankez/stylelint-config

[![npm](https://img.shields.io/npm/v/@bernankez/stylelint-config?color=green&label=npm)](https://www.npmjs.com/package/@bernankez/stylelint-config)

## Usage

### Install

You will need stylelint 15.0.0 or higher as a devDependency.
```bash
pnpm add -D stylelint @bernankez/stylelint-config
```

### Config `.stylelintrc.json`

```json
{
  "extends": "@bernankez/stylelint-config"
}
```

> **Note**: It seems that the `ignoreFiles` in my stylelint-config is not having effect. You may add `.stylelintignore` manually.
>
> see https://stackoverflow.com/questions/75498883/stylelint-ignorefiles-not-working-includes-the-ignored-files-paths-always

### Add script for package.json

For example:

```json
{
  "scripts": {
    "stylelint": "stylelint **/**/*.css",
    "stylelint:fix": "stylelint **/**/*.css --fix"
  }
}
```

To lint other file types, you need to add the file types manually to apply Stylelint. For example:

```json
{
  "scripts": {
    "stylelint": "stylelint **/**/*.{css,vue}",
    "stylelint:fix": "stylelint **/**/*.{css,vue} --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and create `.vscode/settings.json` or add it to your global settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  // disable VS Code's built-in linters is optional
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  // add extensions you would like to lint on save
  "stylelint.validate": [
    "css",
    "postcss",
    "vue",
    "html"
  ]
}
```

### Using with SCSS

Set your `.stylelintrc.json` to:
```json
{
  "extends": "@bernankez/stylelint-config/scss"
}
```

### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*.{css,scss,less,vue}": "stylelint --fix",
    // if you are using ESLint also.
    "*": "eslint --fix"
  }
}
```

and then

```bash
pnpm add -D lint-staged simple-git-hooks
```

### ESLint

It's recommended to use Stylelint with ESLint. Here's my [eslint-config](https://github.com/Bernankez/eslint-config).
