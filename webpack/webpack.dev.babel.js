import merge from 'webpack-merge';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import commonConfig from './webpack.common.babel';

export default merge(commonConfig, {
  entry: {
    client: ['react-hot-loader/patch', commonConfig.entry.client],
  },

  output: {
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Smart Cities',
      appMountId: 'app',
      links: [
        'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        'http://api.tomtom.com/maps-sdk-js/4.15.0/examples/sdk/map.css',
        'http://api.tomtom.com/maps-sdk-js/4.15.0/examples/elements.css',
      ],
      scripts: [
        'http://api.tomtom.com/maps-sdk-js/4.15.0/examples/sdk/tomtom.min.js',
      ],
    }),
  ],
});
