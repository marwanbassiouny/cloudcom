const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.[contenthash].js', // Output filename with hash for caching
    clean: true, // Clean up previous files in 'dist' before building
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Do not process node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Load image files
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow imports without file extensions for JS and JSX
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the existing HTML file
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
      },
    }),
    new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|mp4)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    new BundleAnalyzerPlugin(),
  ],
  mode: 'production', // Set mode to 'production' to enable optimizations like minification
  optimization: {
    splitChunks: {
      chunks: 'all', // Extract common dependencies into separate files
      name: 'vendors', // Splits third-party modules
    },
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // Drop console statements to further minimize
        },
        format: {
          comments: false,
        },
      },
      extractComments: false,
    }),
  ],
  },
};
