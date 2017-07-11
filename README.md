# React Ward
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

## Features
- [React](https://facebook.github.io/react/) as the view
- Source bundled with [Webpack 2](https://webpack.js.org/)
- HMR React components with [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
- [CSS Modules](https://github.com/css-modules/css-modules) and [cssnext](http://cssnext.io/) giving you CSS superpowers
- JS type checking with [FlowType](https://flowtype.org/)
- Standard [JS](http://standardjs.com/) and [CSS](https://github.com/stylelint/stylelint-config-standard) linting configuration
- Testing with [Jest](https://facebook.github.io/jest/)
- Long term browser caching of assets with automated cache invalidation

## Installation

Install dependencies to get started.

```sh
yarn install
```

## Development

Start a web server and open your app in your browser. When you make changes in the `src` folder, it will rebuild your app and refresh your browser.

```sh
yarn dev
```

Lint your code and automatically fix lint errors with [ESLint](http://eslint.org/) for JS and with [stylefmt](https://github.com/morishitter/stylefmt) for CSS where possible.

```sh
yarn lint
```

Starts a static file server with [serve](https://github.com/zeit/serve) with the `build` folder as root.

```sh
yarn start
```

## Testing

Run all tests.

```sh
yarn test
```

Run all tests and watch for file changes to restart the tests.

```sh
yarn test:watch
```

Create and open the coverage report of all your tests.

```sh
yarn coverage
```

## Deployment

Create production build in the `build` folder. You can deploy this folder to wherever you want.

```sh
yarn build
```

## Updating

Install [updtr](https://github.com/peerigon/updtr) to update dependencies

```sh
npm install -g updtr && updtr
```
