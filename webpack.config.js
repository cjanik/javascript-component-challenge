var path = require("path");
module.exports = {
  entry: {
    app: ['./js/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
    },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          include: path.join(__dirname, 'js'),
          loader: 'babel'
        }
      ]
    }
};
