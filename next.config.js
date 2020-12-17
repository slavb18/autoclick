const isProd = process.env.NODE_ENV === 'production';

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['uniforms-bridge-json-schema', 'uniforms', 'uniforms-semantic', '@ilb/jsonschemaform']);

module.exports = withPlugins([withTM], {
  basePath: '/autoclick',
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
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
