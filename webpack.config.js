module.exports = {
  entry: [
    './sources/app.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devServer: {
    inline:true,
    port: 8383
  }
};
