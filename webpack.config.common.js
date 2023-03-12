const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  target: 'web',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name]-[contenthash].css' : '[name].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/images', to: 'images', noErrorOnMissing: true }],
    }),
    new WebpackManifestPlugin(),
  ],
  resolve: {
    modules: ['node_modules'],
    alias: {
      public: path.resolve(__dirname, './public/'),
      extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // in bytes
              fallback: require.resolve('file-loader'),
              name: process.env.NODE_ENV === 'production' ? '[name]-[contenthash].[ext]' : '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: () => [postcssNormalize()],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production', // <-- !!IMPORTANT!!
            },
          },
        ],
      },
    ],
  },
};
