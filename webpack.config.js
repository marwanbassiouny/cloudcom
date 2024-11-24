const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  devtool: false,
  entry: './src/index.js', // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.[contenthash].js', // Output filename with hash for caching
    clean: true, // Clean up previous files in 'dist' before building
    assetModuleFilename: 'assets/[name].[contenthash][ext]', // Place all assets in a single 'assets' folder
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Do not process node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|ogg|avi|mov)$/i, // Combine images, videos, and SVGs
        type: 'asset/resource', // Use Webpack's asset modules
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
      },
    }),
    new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|png|mp4|mov)$/i,
        threshold: 2000,
        minRatio: 0.8,
        deleteOriginalAssets: true, 
      }),
    new BundleAnalyzerPlugin(),
  ],
  mode: 'production', // Set mode to 'production' to enable optimizations like minification
  optimization: {
    splitChunks: {
      chunks: 'all', // Extract common dependencies into separate files
      name: 'vendors', // Splits third-party modules
      minSize: 10000, // Minimum size before it splits
      maxSize: 25000, // Maximum chunk size before it splits again
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Drop console statements to further minimize
            passes: 2, // More passes for better minification
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
