import path from 'path';
import webpack, {EnvironmentPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {ConfigOptions} from './types/types';

import ESLintPlugin from 'eslint-webpack-plugin';

export const getPlugins = (options: ConfigOptions): webpack.Configuration['plugins'] => {
  const plugins: webpack.Configuration['plugins'] = [];

  const environmentPlugin = new EnvironmentPlugin({
    BASE_URL: options.BASE_URL ? '/something' : null,
    BUILD_MODE: options.mode ?? 'Мод не используется',
  });

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.paths.indexHtml,
    favicon: path.resolve(__dirname, options.paths.public, 'Favicon16.ico'),
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css',
  });

  const eslintPlugin = new ESLintPlugin({
    context: options.paths.src,
    extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    emitError: true,
    emitWarning: true,
    failOnError: true,
  });

  const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

  const webpackAnalyzerPlugin = new BundleAnalyzerPlugin();

  plugins.push(environmentPlugin);
  plugins.push(htmlWebpackPlugin);
  plugins.push(miniCssExtractPlugin);

  if (options.isDevBuild) {
    plugins.push(reactRefreshWebpackPlugin);
    plugins.push(eslintPlugin);
  }

  if (options.showAnalyzer) {
    plugins.push(webpackAnalyzerPlugin);
  }

  return plugins;
};
