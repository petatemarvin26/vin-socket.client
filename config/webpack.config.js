const TsPathPlugin = require('tsconfig-paths-webpack-plugin');

const {TS} = require('./constants');
const {resolve} = require('./utils');

/**
 * @param {any} env
 * @returns {import('webpack').Configuration}
 */
module.exports = () => {
  return {
    target: 'web',
    mode: 'production',
    entry: {
      index: resolve('src/index.ts'),
    },
    output: {
      path: resolve('dist'),
      filename: 'index.js',
      library: {
        type: 'module',
      },
    },
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: TS,
          loader: 'babel-loader',
          options: {
            configFile: resolve('config/.babelrc'),
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
      plugins: [new TsPathPlugin({configFile: resolve('tsconfig.json')})],
    },
  };
};
