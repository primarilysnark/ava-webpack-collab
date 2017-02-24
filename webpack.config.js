var path = require('path');

module.exports = {
  devtool: '#source-map',
  entry: [
    './src/app.js'
  ],
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectories: ['node_modules'],
    root: [
      path.resolve(__dirname, './node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
