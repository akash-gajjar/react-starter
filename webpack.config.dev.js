const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
require('dotenv').config({ path: './.env' });
const StylelintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports = (_env) =>
  merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      allowedHosts: 'all',
      static: {
        directory: path.resolve(__dirname, 'public'),
        publicPath: `/`,
      },
      port: 6600,
      historyApiFallback: true,
    },
    plugins: [
      new StylelintPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
      new webpack.DefinePlugin({
        process: {
          env: JSON.stringify(process.env),
        },
      }),
    ],
  });
