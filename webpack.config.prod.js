const webpack = require('webpack');
const { merge } = require('webpack-merge');
require('dotenv').config({ path: './.env' });

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(process.env),
      },
    }),
  ],
});
