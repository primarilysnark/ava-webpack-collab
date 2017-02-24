var path = require('path');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
