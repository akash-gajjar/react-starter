<p>
  <div align="center">
      <a href="https://github.com/akash-gajjar/react-starter">
        <img
          src="public/images/react.svg"
          alt="React Starter"
          width="300"
          height="300"
        />
      </a>
  </div>
</p>

## Development Setup

### Use Tailwind

Simply add import for [tailwind.scss](src/styles/tailwind.scss) in [index.js](src/index.js)

### Using SVG

There are two ways to import SVG, as an inline SVG and as a Image. Depending on the use case,
for loading SVG as a Image append `?url` while importing, this will not inline the SVG, whereas
default import will inline the SVG content.

```js
import Svg from './assets/file.svg?react'; //<--- SVG as React component
import svg from './assets/file.svg'; // <--- SVG as Image

const App = () => {
  return (
    <div>
      <img src={svg} width="200" height="200" />
      <Svg width="200" height="200" viewBox="0 0 3500 3500" />
    </div>
  );
};
```

## AWS Build

The project comes with default settings for hosting on AWS S3 using Cloudfront. The setup is
optimized to reduce the client payload size by compressing JS, CSS assets in gzip format. To
achieve this, it uses the `compression-webpack-plugin` to compress the assets before uploading
them to S3 using the `webpack-s3-plugin`.

For taking advantage of this, below AWS configuration are required

```env
DEPLOY_TO_S3=Y

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
FRONTEND_BUCKET_NAME=
```

### Git

There are two branches

- `develop` for active development
- `main` official branch used for production releases

First clone this repository

```text
git clone git@github.com:akash-gajjar/react-starter.git
```

or using ssh

```text
git clone git@github.com:akash-gajjar/react-starter.git
```

Checkout `develop` or `main` and then install dependencies

```sh
git checkout develop
yarn install
```

Finally start development server

```sh
yarn start
```

## Contributing

Checkout new branch from your local develop branch, add meaningful branch name with prefix like
`fix/` when fixing a bug or `feat/` when adding a new feature.

```text
git checkout -b fix/meaningful-name
```

After making changes to your local git repository make sure to run linter
scripts

```text
yarn lint:style
yarn lint:script
```

If you have any linting error Fix them now by running

```text
yarn lint:fix
```

and then finally format your code using `prettier`

```text
yarn prettier
```

Now commit your changes and provide title and summary of changes then execute

```text
git push
```

Now you can submit a PR.
