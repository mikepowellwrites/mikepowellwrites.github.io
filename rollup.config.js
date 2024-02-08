const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');

module.exports = {
  input: '_assets/javascripts/main.js',
  output: {
    file: 'assets/javascripts/scripts.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
