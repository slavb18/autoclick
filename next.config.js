const isProd = process.env.NODE_ENV === 'production';

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['uniforms-bridge-json-schema', 'uniforms', 'uniforms-semantic', '@ilb/jsonschemaform']);
const basePath = '/autoclick';
module.exports = withPlugins([withTM], {
  basePath,
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|jpg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: basePath + '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    })
    config.module.rules.unshift({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre',
      options: {
        quiet: true,
        failOnError: isProd,
        failOnWarning: isProd,
        emitError: false,
        emitWarning: true,
      },
    });
    return config
  },
});
