const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const S3Plugin = require('webpack-s3-plugin');

const commonConfig = require('./webpack.config.common');

require('dotenv').config({ path: './.env.production' });

const { COMPRESS_ASSETS = null, DEPLOY_TO_S3 = null } = process.env;

/**
 * @typedef {import('webpack').Configuration} Configuration
 * @type {Configuration}
 *
 * @see https://webpack.js.org/configuration/
 */
const config = {
  mode: 'production',
  stats: 'detailed',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          APP_API_URL: JSON.stringify(process.env.APP_API_URL),
          APP_ASSET_URL: JSON.stringify(process.env.APP_ASSET_URL),
        },
      },
    }),
    COMPRESS_ASSETS &&
      new CompressionPlugin({
        test: /\.(js|css)$/,
        filename: '[path][base]',
        algorithm: 'gzip',
        deleteOriginalAssets: true,
      }),
    DEPLOY_TO_S3 &&
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
};

module.exports = merge(commonConfig, config);
