import merge from 'webpack-merge';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import commonConfig from './webpack.common.babel';

export default merge(commonConfig, {
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },

  plugins: [
    (process.env.ANALYZE ? new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }) : null),
    new webpack.ProgressPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        drop_console: true,
        unused: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        const { context } = module;
        return context && context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ].filter(p => p),
});
