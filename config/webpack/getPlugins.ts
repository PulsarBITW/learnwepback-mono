import path from 'path';
import webpack, {EnvironmentPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import {ConfigOptions} from './types/types';

export const getPlugins = (options: ConfigOptions): webpack.Configuration['plugins'] => {
  const plugins: webpack.Configuration['plugins'] = [];

  const environmentPlugin = new EnvironmentPlugin({
    BASE_URL: options.BASE_URL ? '/something' : null,
    BUILD_MODE: options.mode ?? 'Мод не используется',
  });
  plugins.push(environmentPlugin);

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.paths.indexHtml,
    favicon: path.resolve(__dirname, options.paths.public, 'Favicon16.ico'),
  });
  plugins.push(htmlWebpackPlugin);

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css',
  });
  plugins.push(miniCssExtractPlugin);

  if (options.showAnalyzer) {
    const webpackAnalyzer = new BundleAnalyzerPlugin();
    plugins.push(webpackAnalyzer);
  }

  if (options.isDevBuild) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
