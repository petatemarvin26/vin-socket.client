const {Configuration} = require('webpack');
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
  },
};

/**
 * @type {Configuration['module']}
 */
const modules = {
  rules: [
    {
      test: /.(ts)/i,
      loader: 'ts-loader',
    },
  ],
};

/**
 * @type {Configuration}
 */
const config = {
  entry,
  output,
  resolve,
  module: modules,
};

module.exports = (env) => {
  config.mode = 'development';
  if (env.production) {
    config.mode = 'production';
  }
  return config;
};
