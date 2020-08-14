const path = require('path');
const { resolve } = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@action': path.resolve(__dirname, 'src/redux-store/actions'),
      '@reducer': path.resolve(__dirname, 'src/redux-store/reducer'),
      '@images': path.resolve(__dirname, 'src/resource/images'),
      '@admin': path.resolve(__dirname,'src/site/admin'),
    },
  };

  return config;
};