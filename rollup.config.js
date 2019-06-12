const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const babel = require('rollup-plugin-babel');

const production = process.env.NODE_ENV === 'production';

export default {
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
    commonjs(),
    production && uglify()
  ]
};
