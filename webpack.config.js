const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
      'vue': require.resolve('vue'),
    }
  }
}
