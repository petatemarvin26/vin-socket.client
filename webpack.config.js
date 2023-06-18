const {Configuration, ProvidePlugin} = require('webpack');
const transform = require('ts-transform-paths').default;

const path = require('path');

const absolute = (dirpath) => {
  return path.resolve(__dirname, dirpath);
};

/**
 * @type {Configuration['entry']}
 */
const entry = {
  index: absolute('src/index.ts'),
};

/**
 * @type {Configuration['output']}
 */
const output = {
  path: absolute('dist'),
  library: {
    type: 'commonjs',
  },
};

/**
 * @type {Configuration['resolve']}
 */
const resolve = {
  extensions: ['.ts', '.js'],
  alias: {
    classes: absolute('src/classes'),
    interfaces: absolute('src/interfaces'),
    common: absolute('src/common'),
    utils: absolute('src/utils'),
  },
};

/**
 * @type {Configuration['module']}
 */
const modules = {
  rules: [
    {
      test: /.(ts)/i,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => transform(),
        },
      },
    },
  ],
};

/**
 * @type {Configuration['plugins']}
 */
const plugins = [
  new ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
];

/**
 * @type {Configuration}
 */
const config = {
  target: 'web',
  entry,
  output,
  resolve,
  plugins,
  module: modules,
};

module.exports = (env) => {
  config.mode = 'development';
  if (env.production) {
    config.mode = 'production';
  }
  return config;
};
