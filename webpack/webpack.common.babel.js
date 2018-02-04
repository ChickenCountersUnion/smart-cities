require('dotenv').config();

import path from 'path';
import webpack from 'webpack';
import CleanupPlugin from 'webpack-cleanup-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';

export const srcPath = path.join(__dirname, '../src');
export const distPath = path.join(__dirname, '../dist');

const commonConfig = {
  name: 'client',

  target: 'web',

  entry: {
    client: `${srcPath}/client`,
  },

  output: {
    path: distPath,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // new CleanupPlugin({
    //   exclude: [
    //     'manifest.json',
    //   ],
    // }),
    // new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.tomtomapikey': JSON.stringify(process.env.tomtomapikey),
    }),
  ],
};

export default commonConfig;
