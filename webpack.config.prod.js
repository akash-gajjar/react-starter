const CompressionPlugin = require('compression-webpack-plugin');
const { pickBy } = require('lodash');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const S3Plugin = require('webpack-s3-plugin');

const commonConfig = require('./webpack.config.common');

require('dotenv').config({ path: './.env' });

// check if running inside AWS CodeBuild
const BUILD_ENV = process.env.CODEBUILD_BUILD_ID;
// include only variable used in our application
const APP_ENV = pickBy(process.env, (_, key) => key.match(/^APP/));

module.exports = merge(commonConfig, {
  mode: 'production',
  stats: 'verbose',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(APP_ENV),
      },
    }),
    BUILD_ENV &&
    new CompressionPlugin({
      test: /\.(js|css)$/,
      filename: '[path][base]',
      algorithm: 'gzip',
      deleteOriginalAssets: true,
    }),
    BUILD_ENV &&
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      s3UploadOptions: {
        ACL: '',
        Bucket: process.env.FRONTEND_BUCKET_NAME, // Your bucket name
        // eslint-disable-next-line consistent-return
        ContentEncoding(fileName) {
          if (/\.(js|css)$/.test(fileName)) {
            return 'gzip';
          }
        },
        // eslint-disable-next-line consistent-return
        ContentType(fileName) {
          if (/\.css/.test(fileName)) {
            return 'text/css';
          }

          if (/\.js/.test(fileName)) {
            return 'application/javascript';
          }
        },
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
        Items: ['/*'],
      },
      directory: 'dist', // This is the directory you want to upload
    }),
  ].filter(Boolean),
});
