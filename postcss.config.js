const config = {
  plugins: {
    'postcss-custom-media': {},
    'postcss-media-minmax': {},
    'postcss-lh': {},
    autoprefixer: {},
    'postcss-urlrev': {
      relativePath: 'assets/stylesheets',
      absolutePath: __dirname
    }
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = {
    ...config.plugins,
    'postcss-urlrev': {},
    cssnano: {}
  };
}

module.exports = config;
